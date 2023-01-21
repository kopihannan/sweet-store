import { getTotal } from "@/productApi/cartSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const TotalCardAmmount = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  return (
    <div className="w-full">
      <div className="text-center bg-[#e5e7eb] ">
        <h1 className="text-xl font-semibold py-[10px]">Cart Totals</h1>
      </div>
      <div className="my-10">
        <div className="flex justify-between">
          <h2 className="font-semibold">Shipping Cost: </h2>
          <h2 className="font-semibold">$ 60 </h2>
        </div>
        <div className="flex justify-between">
          <h2 className="font-semibold">Tax:</h2>
          <h2 className="font-semibold">15%</h2>
        </div>
        <br />
        <div className="flex justify-between">
          <h2 className="font-semibold">Total: </h2>
          <h2 className="font-semibold">${cart.cartTotalAmount}</h2>
        </div>
      </div>
      <div>
        <button className="bg-[#FF8B13] py-3 w-full shadow-lg rounded text-white font-medium text-sm hover:bg-[#df780a]">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default TotalCardAmmount;
