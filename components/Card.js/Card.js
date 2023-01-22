import { addToCart, decreaseCart, removeFromCart } from "@/productApi/cartSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Card = ({ item }) => {
  const { name, price, image, cartQuantity } = item;
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleMinus = (id) => {
    dispatch(decreaseCart(id));
  };
  const handlePlus = (id) => {
    dispatch(addToCart(id));
  };

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <tr>
      <th></th>
      <td>
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-24 rounded">
              <img src={image} alt={name} />
            </div>
          </div>
          <h2>{name}</h2>
        </div>
      </td>
      <td>{price}</td>
      <td>
        <div className="flex rounded">
          <p className="p-2 shadow bg-white  border">
            <span onClick={() => handleMinus(item)} className="cursor-pointer">
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
          <p className="p-2 border bg-white shadow px-6">
            {cart.cartTotalQuantity}
          </p>
          <p className="p-2 border shadow bg-white">
            <span className="cursor-pointer" onClick={() => handlePlus(item)}>
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
        </div>
      </td>
      <td>
        <div>
          <svg
            onClick={() => handleDelete(item)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </div>
      </td>
    </tr>
  );
};

export default Card;
