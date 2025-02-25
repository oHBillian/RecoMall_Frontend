"use client"
import ProductList from "@/components/productlist";
import { setSubcategoryId } from "@/lib/slice/subcategoryslice";
import { RootState } from "@/lib/store";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const dispatch = useDispatch()
  const subcategoryId = useSelector((state: RootState) => state.subcategoryId.SubcategoryId)
  
  useEffect(() => {
    if(categoryId){
      dispatch(setSubcategoryId(null))
    }
  },[categoryId,dispatch])

  return (
    <div className="h-full ">
      <ProductList categoryId={categoryId} subcategoryId={subcategoryId?.toString()}/>
    </div>
  );
};

export default CategoryPage;
