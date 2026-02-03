import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { productsary } from "./productData";

export default function Cart() {
  const { cart, setcart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="text-center mt-10 text-xl font-semibold">
        🛒 Your cart is empty
      </div>
    );
  }

  // Remove item completely
  const removeItem = (pid) => {
    const newCart = cart.filter((item) => item.pid !== pid);
    setcart(newCart);
  };

  let grandTotal = 0;

  let ui = cart.map((e, index) => {
    let p = productsary.find((ele) => ele.id == e.pid);
    if (!p) return null;

    let total = p.price * e.quantity;
    grandTotal += total;

    return (
      <tr key={e.pid} className="border-b text-center">
        <td className="py-3">{index + 1}</td>
        <td className="py-3">{p.title}</td>
        <td className="py-3">${p.price}</td>
        <td className="py-3">{e.quantity}</td>
        <td className="py-3 font-semibold">${total}</td>
        <td className="py-3">
          <button
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            onClick={() => removeItem(e.pid)}
          >
            Remove
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Your Cart</h2>

      <table className="w-full border-collapse">
        <thead className="bg-sky-900 text-white">
          <tr>
            <th className="py-3">S.No</th>
            <th className="py-3">Product</th>
            <th className="py-3">Price</th>
            <th className="py-3">Quantity</th>
            <th className="py-3">Total</th>
            <th className="py-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {ui}

          {/* GRAND TOTAL ROW */}
          <tr className="bg-gray-100 font-bold text-center">
            <td colSpan="4" className="py-4 text-right pr-6">
              Grand Total :
            </td>
            <td className="py-4">${Math.floor(grandTotal)}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
