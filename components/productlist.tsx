import { cn } from "@/lib/utils";
import { Product } from "@/type";
import React from "react";
import Productcard from "./productcard";
interface Productlistprops {
  data: Product[];
}

const ProductList: React.FC<Productlistprops> = async ({ data }) => {
  return (
    <div className="p-4 flex justify-center w-full" >
      <div
        className={cn(
          data.length > 0
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
            : ""
        )}
      >
        {data.length > 0 ? (
          data.map((product) => (
            <Productcard product={product} categoryID={product.categoryId} key={product.id}/>
          ))
        ) : (
          <div>No item found</div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
