import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { login } = useContext(AuthContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const loginHandler = async () => {
    try {
      const response = await axios
        .post(
          "http://localhost:4000/api/auth/login",
          { ...form },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response) {
            navigate("/home");
          }

          login(response.data.token, response.data.userId, response.data.email);
        });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md sm:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label className="block text-gray-600">Email</label>
            <input
              name="email"
              onChange={handleInputChange}
              placeholder="example@gmail.com"
              type="email"
              className="w-full border rounded-md py-2 px-3"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600">Password</label>
            <input
              name="password"
              onChange={handleInputChange}
              type="password"
              className="w-full border rounded-md py-2 px-3"
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <button
              onClick={loginHandler}
              className="w-full bg-blue-500
              hover:bg-blue-800 text-white rounded-md py-2"
            >
              Log In
            </button>
            <Link to="/">
              <p
                className="text-right
               hover:text-blue-500 
               cursor-pointer text-gray-500" >
                Create an account?
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
