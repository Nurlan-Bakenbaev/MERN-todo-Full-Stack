import { Link } from "react-router-dom";

const Home = ({ isLogin }) => {
  return (
    <div>
      {isLogin ? (
      <div>
        <h1 className="text-2xl text-center text-black mt-10">Gotta to do</h1>
          <div>

          </div>
      </div>
      ) : (
        <h1 className="text-2xl text-center text-black mt-10">
          Please
          <Link className="text-blue-500 px-1" to="/login">
            Log In
          </Link>
        </h1>
      )}
    </div>
  );
};

export default Home;
