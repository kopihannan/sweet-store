import { getAuthToken, logoutUser } from "@/productApi/authSlice";
import { getTotal } from "@/productApi/cartSlice";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  console.log(cart);
  const dispatch = useDispatch();

  const [refress, setRefress] = useState();


  useEffect(() => {
    const data = localStorage.getItem("token");
    if (data?.length > 0) {
      dispatch(getAuthToken(data));
    }
  }, []);

  useEffect(() => {
    const datas = JSON.parse(localStorage.getItem("cartItems"));
    if (datas?.length > 0) {
      const ref = dispatch(getTotal(datas));
       setRefress(ref.payload.length);
    }
  }, []);

  return (
    <div className="w-full">
      <div className="navbar py-5 bg-[#4B8673] text-white shadow-md px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link className="text-white" href="/">
                Home
              </Link>
              <Link className="text-white" href="">
                Products
              </Link>
              <Link className="text-white" href="">
                Contact
              </Link>
              <Link className="text-white" href="">
                About
              </Link>
            </ul>
          </div>
          <Link href="/" className="normal-case font-bold text-xl">
            Sweet Shop
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link className="pl-5 font-medium" href="/">
              Home
            </Link>
            <Link className="pl-5 font-medium" href="">
              Products
            </Link>
            <Link className="pl-5 font-medium" href="">
              Contact
            </Link>
            <Link className="pl-5 font-medium" href="">
              About
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="mr-5">
            <button
              type="button"
              className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg"
            >
              <Link href="/products/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </Link>
              <span className="sr-only">Notifications</span>
              {
                refress? <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                {refress}
              </div> : ""
              }
            </button>
          </div>
          {auth.token ? (
            <button
              onClick={() => {
                dispatch(logoutUser(null));
              }}
            >
              Logout
            </button>
          ) : (
            <div>
              <Link href="/login">Login</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
