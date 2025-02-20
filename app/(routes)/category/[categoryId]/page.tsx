import getProductsByCategory from "@/actions/get-products-by-category";
import ProductList from "@/components/productlist";
import React from "react";

const CategoryPage = async ({ params }: { params: { categoryId: string } }) => {
  const { categoryId } = await params;
  const products = await getProductsByCategory(categoryId);
  return (
    <div className="h-full ">
      <ProductList data={products} />
    </div>
  );
};

export default CategoryPage;
