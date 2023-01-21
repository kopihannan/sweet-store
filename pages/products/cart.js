import Card from "@/components/Card.js/Card";
import TotalCardAmmount from "@/components/Card.js/TotalCardAmmount";
import Layout from "@/components/Layout";
import { getCart } from "@/productApi/cartSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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
                    <Card key={item._id} item={item}></Card>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-3/12 mb-5">
          <TotalCardAmmount></TotalCardAmmount>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
