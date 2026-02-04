 import React, { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Addtocart({ pid }) {
  const { cart, setcart } = useContext(CartContext);

  const item = cart.find((e) => e.pid === pid);
  const count = item ? item.quantity : 0;

  const addItem = () => {
    setcart([...cart, { pid, quantity: 1 }]);
  };

  const updateItem = (type) => {
    setcart(
      cart
        .map((item) =>
          item.pid === pid
            ? {
                ...item,
                quantity:
                  type === "+" ? item.quantity + 1 : item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="mt-2">
      {count === 0 ? (
        <input
          type="button"
          value="Add to Cart"
          className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg w-full"
          onClick={addItem}
        />
      ) : (
        <div className="bg-sky-600 flex gap-4 items-center justify-center hover:bg-sky-700 text-white px-6 py-3 rounded-lg w-full">
          <button onClick={() => updateItem("-")} className="text-xl">
            -
          </button>
          <span className="font-semibold">{count}</span>
          <button onClick={() => updateItem("+")} className="text-xl">
            +
          </button>
        </div>
      )}
    </div>
  );
}
