import Image from "next/image";
import React from "react";
import { Product } from "@/type";
import Link from "next/link";
import Productbutton from "./productbutton";
interface Productcardprops {
  product: Product;
}

const Productcard: React.FC<Productcardprops> = ({
  product,
}) => {
  // console.log("ก่อนจะ format",product)
  const fommattedproduct = {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.images[0],
  }

  return (
    // <Link href={`/product/${product.id}`}>
    <div className="border rounded-lg shadow-sm hover:shadow-md p-4 space-y-3 transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-48 w-full flex justify-center items-center">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.images?.[0] || "/placeholder.jpg"}
            alt={product.name}
            width={200}
            height={200}
            className="object-contain h-full "
          />
        </Link>
      </div>

      {/* Product Info Container */}
      <div className="space-y-2">
        {/* Product Name */}
        <h2 className="font-semibold text-lg truncate">{product.name}</h2>

        {/* Category Info */}
        <div className="text-sm bg-gray-200 font-medium space-y-1 border w-fit px-2 rounded-md shadow-sm">
          <p>{product.categoryname}</p>
        </div>

        {/* Price */}
        <p className="text-lg font-medium text-green-600">
          ฿
          {Number(product.price).toLocaleString("th-TH", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>

        <div className="">
          <Productbutton productId={product.id} cartvalue={fommattedproduct}/>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
