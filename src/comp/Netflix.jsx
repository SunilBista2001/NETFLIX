import { Link } from "react-router-dom";
const Netflix = () => {
  return (
    <div className="flex w-full justify-between px-5 py-1 cursor-pointer z-[100] absolute">
      <h1 className="text-red-600 text-4xl  ">NETFLIX</h1>
      <div>
        <Link to="/login">
          <button className="text-white m-2 px-2">Sign In</button>
        </Link>
        <Link to="/signup">
          <button className="bg-red-600 px-2 py-1 rounded text-white">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Netflix;
