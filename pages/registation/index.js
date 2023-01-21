import Layout from "@/components/Layout";
import { addToken, registerUser } from "@/productApi/authSlice";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const register = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const result = JSON.parse(token);
    console.log(result);
    if (result) {
      dispatch(addToken(result));
    }
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    dispatch(registerUser({ name, email, password }));
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-r from-[#FF8787] to-[#9EB23B] py-6">
        <div className="w-[500px] mx-auto py-8 rounded shadow-lg">
          <form className="p-10" onSubmit={handleRegister}>
            <h1 className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-20 h-20 text-[#444444]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </h1>
            <div className="my-3">
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="input input-bordered w-full"
              />
            </div>
            <div className="my-3">
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="input input-bordered w-full"
              />
            </div>
            <div className="text-center text-red-600">
              {auth.registerStatus === "rejected" ? (
                <p>{auth.registerError}</p>
              ) : null}
            </div>
            <button
              className="w-full bg-gradient-to-r from-[#FF6D28] to-[#EA047E] shadow-md rounded-md px-7 py-3 mt-5 hover:from-[#d34300] hover:to-[#af005d] text-white text-sm"
              type="submit"
            >
              SIGNUP
            </button>
            <div className="divider">OR</div>
            <div className="text-center text-[#414141]">
              <span>have an account</span>
              <Link href="/login" className="link link-primary pl-2">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default register;
