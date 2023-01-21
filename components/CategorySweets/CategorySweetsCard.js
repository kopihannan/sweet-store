import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategorySweetsCard = ({ product }) => {
  const { name, price, image, _id } = product;
  return (
    <div>
      <div className="w-[350px] p-5 border shadow rounded mx-auto">
        <div>
          <img className="h-[220px]" src={image} alt="" />
        </div>
        <div className="flex justify-around pt-8">
          <h4 className="font-semibold text-[#414141]">{name}</h4>
          <h5 className="font-semibold text-[#FD841F]">Price: ${price}</h5>
        </div>
        <div className="flex justify-center items-center py-3">
          <p className=" hover:bg-[#E97777] p-3 rounded-full cursor-pointer hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </p>
          <p className=" hover:bg-[#E97777] p-3 rounded-full cursor-pointer hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </p>
          <Link href={`/products/${_id}`}>
            <p className=" hover:bg-[#E97777] p-3 rounded-full cursor-pointer hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategorySweetsCard;
