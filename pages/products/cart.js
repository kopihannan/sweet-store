import Card from "@/components/Card.js/Card";
import TotalCardAmmount from "@/components/Card.js/TotalCardAmmount";
import Layout from "@/components/Layout";
import { getCart } from "@/productApi/cartSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cart);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cartItems"));
    if (data?.length > 0) {
      dispatch(getCart(data));
    }
  }, []);

  return (
    <Layout>
      <div className="w-full items-start hero-content flex-col lg:flex-row justify-center text-[#555555]">
        <div className="lg:w-9/12 md:w-7/12 w-full">
          <div className="overflow-x-auto w-full">
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
        <div className="lg:w-3/12 md:w-5/12 w-full mb-5">
          <TotalCardAmmount></TotalCardAmmount>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
