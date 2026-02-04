import React from "react";
import { productsary } from "./productData";
import { Link } from "react-router-dom";

export default function Categories(props) {
  const direction = props.direction;

  // Unique categories
  const categories = [
    ...new Map(
      productsary.map((p) => [
        p.category,
        { cname: p.category, image: p.thumbnail },
      ])
    ).values(),
  ];
  
  // 👉 SIDEBAR STYLE (bottom)
  if (direction === "bottom") {
    return (
      <div>
        <p className="text-center text-2xl font-bold my-4">Categories</p>

        <div className="flex flex-col gap-3 ">
          {categories.map((c, i) => (
            <Link
              key={i}
              to={"/product/" + c.cname}
              className="bg-white p-4 rounded-lg shadow hover:bg-sky-50 hover:text-sky-600 transition text-center font-medium capitalize"
            >
              {c.cname}
            </Link>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="px-6 py-8">

      <p className="text-center text-3xl font-bold my-8">
        Shop by Category
      </p>

      <div className="grid grid-cols-2 mt-14 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {categories.map((c, i) => (
          <Link
            key={i}
            to={"/product/" + c.cname}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 group"
          >

            {/* Image */}
            <div className="h-36 flex justify-center items-center overflow-hidden">
              <img
                src={c.image}
                alt=""
                className="h-full object-contain group-hover:scale-110 transition duration-300"
              />
            </div>

            {/* Title */}
            <p className="text-center font-semibold mt-4 capitalize text-gray-800 group-hover:text-sky-600">
              {c.cname}
            </p>

          </Link>
        ))}

      </div>
    </div>
  );
}
