import { Link } from "react-router-dom";

const Login = () => {}

const loginHandler=()=>{

}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md sm:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label className="block text-gray-600">Email</label>
            <input
              placeholder="example@gmail.com"
              type="email"
              className="w-full border rounded-md py-2 px-3"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              className="w-full border rounded-md py-2 px-3"
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <button className="w-full bg-blue-500 hover:bg-blue-800 text-white rounded-md py-2">
              Log In
            </button>
            <Link to="/">
              <p
                className="text-right
               hover:text-blue-500 
               cursor-pointer text-gray-500"
              >
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
