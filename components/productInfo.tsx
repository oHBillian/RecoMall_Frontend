import { Product } from "@/type";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div className="w-full flex flex-col h-full justify-between space-y-6 p-6 bg-white rounded-lg border">
      <div className="space-y-4">
        {/* Product Header */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            {product.name}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          <Badge 
            variant="outline" 
            className="px-3 py-1 text-sm font-medium bg-gray-50"
          >
            {product.category.name}
          </Badge>
          <Badge 
            variant="outline" 
            className="px-3 py-1 text-sm font-medium bg-gray-50"
          >
            {product.subcategory.name}
          </Badge>
        </div>
      </div>

      {/* Price and Cart Section */}
      <div className="flex items-center h-fit justify-between pt-4 border-t border-gray-100">
        <p className="text-2xl font-semibold text-green-600">
          ฿
          {Number(product.price).toLocaleString("th-TH", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
        <Button variant={"default"}>
          <ShoppingCart className="w-5 h-5" />
          <span>Add to Cart</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;