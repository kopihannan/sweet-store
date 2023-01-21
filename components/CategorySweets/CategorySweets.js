import { useGetProductQuery } from "@/productApi/productApi";
import React from "react";
import CategorySweetsCard from "./CategorySweetsCard";

const CategorySweets = () => {
  const { data, error, isLoading } = useGetProductQuery();
  console.log(error);
  return (
    <div className="my-10 w-full mx-auto">
      {isLoading && <h1>Loading.....</h1>}
      <h1 className="text-center font-bold text-3xl text-[#414141] my-10">
        Shop By Category
      </h1>

      <div className="grid grid-cols-3 justify-center items-center mx-auto">
        {
          data && data.map((product)=> <CategorySweetsCard product={product} key={product._id}></CategorySweetsCard>)
        }
      </div>
    </div>
  );
};

export default CategorySweets;
