import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

const Signup = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        setError(error);
      });
  };
  return (
    <div className="absolute top-[20%] text-white flex w-full items-center justify-center flex-col">
      <h1 className="text-3xl mb-4 border-b-2 ">
        Signup To <span className="text-red-600">NETFLIX</span>
      </h1>
      <form className="flex flex-col gap-3" onSubmit={handleSignup}>
        <input
          className="w-[260px] mb-2 px-2 py-1 rounded bg-transparent border-b-[2px] text-sm"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-[260px] mb-2 px-2 py-1 rounded bg-transparent border-b-[2px] text-sm"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-green-600 rounded mb-2 px-2 py-1 text-sm hover:bg-green-500 "
          type="submit"
        >
          Sign up
        </button>
      </form>
      {error && <span className="mb-2 text-xs text-red-500">""</span>}
      <h4 className="flex gap-2 items-center text-xs" type="submit">
        Don't have an account ?
        <Link to="/login">
          <span className="cursor-pointer text-green-500 hover:text-green-600">
            Sign In
          </span>
        </Link>
      </h4>
    </div>
  );
};
export default Signup;
