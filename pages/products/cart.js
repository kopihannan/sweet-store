import Card from "@/components/Card.js/Card";
import TotalCardAmmount from "@/components/Card.js/TotalCardAmmount";
import Layout from "@/components/Layout";
import { getCart } from "@/productApi/cartSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [item, setItem] = useState(null);


  useEffect(() => {
    const carts = JSON.parse(localStorage.getItem("cart"));
    if (carts?.length > 0) {
      dispatch(getCart(carts));
    }
  }, []);

  return (
    <Layout>
      <div className="w-full min-h-screen flex justify-center text-[#555555]">
        <div className="w-9/12">
          <div className="">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {cart?.cartItems &&
                  cart?.cartItems?.map((item) => (
                    <Card key={item._id} item={item} setItem={setItem}></Card>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-3/12 mb-5">
          {item && <TotalCardAmmount item={item}></TotalCardAmmount>}
        </div>
      </div>
    </Layout>
  );
};

export default cart;
