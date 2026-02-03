import React from "react";
import { Link, useParams } from "react-router-dom";
import { productsary } from "./productData";
import ImageGallery from "./Imagegallery";
import Rating from "./Rating";
import Addtocart from "./Addtocart";

export default function ProductDetails() {
  const { id } = useParams();
  const product = productsary.find((i) => i.id == id);

  if (!product) {
    return <div className="text-center mt-10">Product not found</div>;
  }

  const similar_products = productsary.filter(
    (i) => i.category === product.category && i.id != id
  );

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      {/* MAIN CARD */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-8 grid md:grid-cols-2 gap-10">

        {/* IMAGE */}
        <div>
          <ImageGallery imgary={product.images} />
        </div>

        {/* INFO */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>

          <p className="text-gray-600">{product.description}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 text-xl ">
            <Rating rating={product.rating}></Rating>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-green-600">
              ${product.price}
            </span>

            <span className="line-through text-gray-400">
              $
              {(
                product.price /
                (1 - product.discountPercentage / 100)
              ).toFixed(2)}
            </span>

            <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm">
              {product.discountPercentage}% OFF
            </span>
          </div>

          {/* Stock */}
          <p
            className={`font-medium ${
              product.stock > 10 ? "text-green-600" : "text-red-500"
            }`}
          >
            {product.stock > 10 ? "In Stock" : "Low Stock"}
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            {/* <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg w-full">
              Add to Cart
            </button> */}

            <Addtocart pid={product.id}></Addtocart>
            <button className="border border-sky-600 text-sky-600 px-6 py-3 rounded-lg w-full hover:bg-sky-50">
              Buy Now
            </button>
          </div>

          {/* Extra info */}
          <div className="text-sm text-gray-500 pt-2 ">
            🚚 {product.shippingInformation} <br />
            🛡 {product.warrantyInformation}
          </div>
        </div>
      </div>

      {/* REVIEWS */}
      <div className="max-w-6xl mx-auto bg-white mt-10 p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

        {product.reviews.map((r, idx) => (
          <div key={idx} className=" py-4">
            <div className="flex justify-between">
              <span className="font-semibold">{r.reviewerName}</span>
              <span>⭐ {r.rating}</span>
            </div>
            <p className="text-gray-600">{r.comment}</p>
          </div>
        ))}
      </div>

      {/* SIMILAR PRODUCTS */}
      <div className="max-w-6xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Similar Products
        </h2>

        <div className="flex gap-6 overflow-x-auto pb-4">
          {similar_products.map((s) => (
            <Link
              key={s.id}
              to={"/productDetails/" + s.id}
              className="min-w-[200px] bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={s.thumbnail}
                className="h-40 w-full object-contain"
                alt=""
              />
              <p className="font-semibold mt-2 line-clamp-2">{s.title}</p>
              <p className="text-green-600 font-bold">${s.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
