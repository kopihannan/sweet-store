import Layout from "@/components/Layout";
import { getUser, loginUser } from "@/productApi/authSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const index = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const router = useRouter()
  console.log(auth);
  
  useEffect(()=>{
    const data = localStorage.getItem("token");
    if (data?.length > 0) {
      dispatch(getUser(data));
    }
  },[])

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

   const login = dispatch(loginUser({ email, password }));
   if(login){
    router.push('/')
    toast.success("login success")
   }

  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-r from-[#eb7575d3] to-[#9eb23bd8] py-6">
        <div className="w-[500px] mx-auto py-8 rounded shadow-lg">
          <form onSubmit={handleLogin} className="p-10">
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
            <div className="mt-3">
              <input
                name="email"
                type="email"
                placeholder="Enter Email"
                className="input input-bordered w-full"
              />
            </div>
            <div className="my-3">
              <input
                name="password"
                type="password"
                placeholder="Enter Password"
                className="input input-bordered w-full"
              />
            </div>
            <button
              className="w-full bg-gradient-to-r from-[#FF6D28] to-[#EA047E] shadow-md rounded-md px-7 py-3 mt-5 hover:from-[#d34300] hover:to-[#af005d] text-white"
              type="submit"
            >
              LOGIN
            </button>
            <div className="divider">OR</div>
            <div className="text-center">
              <Link
                href="/registation"
                className="w-full bg-gradient-to-r from-[#b800f0] to-[#ea0451] shadow-md rounded-md px-7 py-3 mt-5 hover:from-[#d34300] hover:to-[#af005d] text-white text-sm"
              >
                CREATE AN ACCOUNT
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default index;
