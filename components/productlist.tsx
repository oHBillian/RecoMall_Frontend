"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Productcard from "./productcard";
import { Product } from "@/type";
import GetProducts from "@/actions/get-Products";
import getProductsByCategory from "@/actions/get-products-by-category";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import getProductsBySubcategory from "@/actions/get-products-by-subcategory";
import { setSubcategoryId } from "@/lib/slice/subcategoryslice";
import { setDescrement, setNotChange } from "@/lib/slice/Paginationslice";

interface Productlistprops {
  categoryId?: string;
  subcategoryId?: string;
}

const ProductList: React.FC<Productlistprops> = ({
  categoryId,
  subcategoryId,
}) => {
  const [products, setProduct] = useState<Product[]>([]);
  const pagevalue = useSelector(
    (state: RootState) => state.pagination.pagevalue
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProductsByCategory = async () => {
      const data = await getProductsByCategory(categoryId || "");
      setProduct(data);
    };

    const fetchProductsBySubcategory = async () => {
      const data = await getProductsBySubcategory(subcategoryId || "");
      if (data.length === 0) {
        setProduct([]);
      } else if (
        data.length === 0 ||
        data[0].categoryId !== Number(categoryId)
      ) {
        dispatch(setSubcategoryId(null));
        fetchProductsByCategory();
      } else {
        setProduct(data);
      }
    };

    const fetchProducts = async () => {
      const data = await GetProducts(pagevalue);
      if (data.length === 0) {
        dispatch(setNotChange());
        if (pagevalue > 1) {
          dispatch(setDescrement());
          return; 
        }
      }
      setProduct(data);
    };

    if (categoryId && subcategoryId) {
      fetchProductsBySubcategory();
    } else if (categoryId) {
      fetchProductsByCategory();
    } else {
      fetchProducts();
    }
  }, [categoryId, subcategoryId, pagevalue]);
  return (
    <div className="p-4 flex justify-center w-full">
      <div
        className={cn(
          products.length > 0
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 items-center"
            : ""
        )}
      >
        {products.length > 0 ? (
          products.map((product) => (
            <Productcard product={product} key={product.id} />
          ))
        ) : (
          <div>No item found</div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
