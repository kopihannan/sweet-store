import Layout from "@/components/Layout";
import { addToCart } from "@/productApi/cartSlice";
import { useGetProductByIdQuery } from "@/productApi/productApi";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { RiseLoader } from "react-spinners";

const products = () => {
  const router = useRouter();
  const { data, error, isLoading } = useGetProductByIdQuery(router.query._id);
  const dispatch = useDispatch();

  const [active, setActive] = useState(0);
  const [count, setCount] = useState(1);

  const handleMinus = () => {
    if (count !== 1) {
      setCount(count - 1);
    } else {
      console.log("no product");
    }
  };

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleAddCart = (data) => {
    const datas = dispatch(addToCart(data));
    if (datas) {
      router.push("/products/cart");
    }
  };

  return (
    <Layout>
      <div className="bg-[#f9e8ff]">
        {isLoading && <h2 className="text-center"><RiseLoader color="#36d7b7" /></h2>}
        {data && (
          <div>
            <div className="hero min-h-screen">
              <div className="hero-content flex-col lg:flex-row w-full">
                <div className="w-1/2">
                  <div className="w-10/12 mx-auto">
                    <img
                      className="rounded h-[300px] lg:w-[400px] md:w-[400px] w-full mx-auto"
                      src={data.image[active]}
                      alt=""
                    />
                  </div>

                  <div>
                    <div className="flex rounded justify-center my-4 ">
                      {data.image.map((img, i) => (
                        <img
                          key={i}
                          onMouseEnter={() => setActive(i)}
                          className="w-[115px] shadow-lg bg-[#f0efef] rounded h-[85px] border p-2 mx-3 cursor-pointer"
                          src={img}
                          alt=""
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="w-1/2">
                  <div>
                    <div>
                      <h1 className="text-5xl font-bold text-[#272727]">
                        {data.name}
                      </h1>
                      <p className="py-6 text-[#444444] font-medium text-justify">
                        Rasmalai is yet another one of my favorite sweets. This
                        Bengali specialty is made with rasgulla (sweetened balls
                        of paneer) soaked in sweetened, thickened milk that has
                        been scented with cardamom and saffron. The result is a
                        creamy, dreamy dessert that absolutely melts in your
                        mouth. Make this soft and tasty rasmalai recipe with my
                        easy step-by-step photos
                      </p>
                      <p className="py-3 text-xl font-semibold text-[#FF8B13]">
                        Price: ${data.price}
                      </p>
                      <div className="lg:flex md:flex flex-wrap items-center justify-between">
                        {/* <div className="flex rounded">
                          <p className="p-3 shadow bg-white  border">
                            <span
                              onClick={handleMinus}
                              className="cursor-pointer"
                            >
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
                                  d="M19.5 12h-15"
                                />
                              </svg>
                            </span>
                          </p>
                          <p className="p-3 border bg-white shadow px-6">
                            {count}
                          </p>
                          <p
                            className="p-3 border shadow bg-white"
                            
                          >
                            <span className="cursor-pointer" onClick={handlePlus}>
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
                                  d="M12 4.5v15m7.5-7.5h-15"
                                />
                              </svg>
                            </span>
                          </p>
                        </div> */}
                        <div className="py-3">
                          <button
                            onClick={() => handleAddCart(data)}
                            className="bg-[#54B435] py-3 w-32 shadow-lg rounded-3xl text-white font-medium hover:bg-[#3c8f20] lg:mr-4 md:mr-4 mr-0 lg:my-0 md:my-0 my-2"
                          >
                            Add to Cart
                          </button>
                          <button className="bg-[#FF8B13] py-3 w-32 shadow-lg rounded-3xl text-white font-medium hover:bg-[#df780a]">
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default products;
