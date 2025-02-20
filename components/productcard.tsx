import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import GetMaincategories from "@/actions/get-Maincategories";
import { Product } from "@/type";
import Link from "next/link";
interface Productcardprops {
    product: Product;
    categoryID: number
}

const Productcard:React.FC<Productcardprops> = async ({product,categoryID}) => {
    const categoryName = await GetMaincategories(categoryID.toString());

  return (
    <Link href={`/product/${product.id}`}>
    <div
      className="border rounded-lg shadow-sm hover:shadow-md p-4 space-y-3 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-48 w-full">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={200}
          height={200}
          className="object-contain h-full"
        />
      </div>

      {/* Product Info Container */}
      <div className="space-y-2">
        {/* Product Name */}
        <h2 className="font-semibold text-lg truncate">{product.name}</h2>

        {/* Category Info */}
        <div className="text-sm bg-gray-200 font-medium space-y-1 border w-fit px-2 rounded-md shadow-sm">
          <p>{categoryName[0]?.name}</p>
        </div>

        {/* Price */}
        <p className="text-lg font-medium text-green-600">
          ฿
          {Number(product.price).toLocaleString("th-TH", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>

        <div className="flex justify-between items-center gap-x-2 text-sm">
          <Button variant="outline" size="sm" className="w-full">
            Details
          </Button>
          <Button size="sm" className="w-full">
            <ShoppingCart /> Add
          </Button>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Productcard;
