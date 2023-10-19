import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const registerHandler = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/registration",
        { ...form },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
      navigate("/home");
      console.log(response.data); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md sm:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Create account
        </h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label className="block text-gray-600">Name</label>
            <input
              onChange={handleInputChange}
              name="name"
              placeholder="Will Smith"
              type="text"
              className="w-full border rounded-md py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Email</label>
            <input
              onChange={handleInputChange}
              name="email"
              placeholder="example@gmail.com"
              type="email"
              className="w-full border rounded-md py-2 px-3"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-600">Password</label>
            <input
              onChange={handleInputChange}
              name="password"
              type="password"
              className="w-full border rounded-md py-2 px-3"
            />
          </div>
          <div className="flex flex-col gap-3">
            <button
              type="button" // Specify the type as "button" to prevent form submission
              onClick={registerHandler}
              className="w-full bg-blue-500 hover:bg-blue-800 text-white rounded-md py-2"
            >
              Register
            </button>
            <Link to="/login">
              <p className="text-right hover:text-blue-500 cursor-pointer text-gray-500">
                Have an account?
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
