import React from "react";
import { productsary } from "./productData";
import { useParams, Link } from "react-router-dom";

export default function Products() {
  const { cname } = useParams();

  const products = productsary.filter(
    (e) => e.category === cname
  );

  return (
    <div className="px-6 py-8">

      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-8 capitalize">
        {cname}
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {products.map((p) => (
          <Link
            key={p.id}
            to={"/productDetails/" + p.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 group"
          >

            {/* Image */}
            <div className="h-44 flex justify-center items-center overflow-hidden">
              <img
                src={p.thumbnail}
                alt=""
                className="h-full object-contain group-hover:scale-110 transition duration-300"
              />
            </div>

            {/* Title */}
            <p className="mt-3 font-semibold text-gray-800 line-clamp-2 group-hover:text-sky-600">
              {p.title}
            </p>

            {/* Price */}
            <p className="text-green-600 font-bold text-lg mt-2">
              ${p.price}
            </p>

            {/* Rating */}
            <div className="text-yellow-400 text-sm mt-1">
              ⭐ {p.rating}
            </div>

          </Link>
        ))}

      </div>
    </div>
  );
}
