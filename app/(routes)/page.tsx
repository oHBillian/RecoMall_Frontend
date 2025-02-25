"use client"
import PaginationTab from "@/components/paginationtab";
import ProductList from "@/components/productlist";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [searchvalue,setSearchvalue] = useState("");
  return (
    <>
      <div className="h-fit pb-5">
        <div className="w-full mt-2 flex justify-center md:px-32 h-96 ">
          <div
            className="rounded-3xl w-full bg-red-200 h-full flex justify-start items-center pl-20 pr-20"
            style={{
              backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(255, 228, 228, 0.8) 0%, transparent 40%),
              radial-gradient(circle at 85% 75%, rgba(255, 192, 203, 0.5) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(255, 240, 240, 0.3) 0%, transparent 60%)
            `,
            }}
          >
            <div className="flex flex-col w- gap-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                Discover Amazing Products
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Find the perfect items for your lifestyle
              </p>
              <div className="flex items-center bg-white p-2 px-5 gap-2 rounded-3xl mt-3 shadow-md">
                <Search size={25} />
                <Input
                  type="text"
                  value={searchvalue}
                  placeholder="Search..."
                  className="bg-white border-none"
                  onChange={e => setSearchvalue(e.target.value)}
                />
                <button className="ml-2 mr-2 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-300" onClick={() => {console.log(searchvalue)}}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-2/3 px-24">
          <ProductList />
        </div>
        <div className="w-full flex justify-center pt-5 pb-4 h-10 items-center">
          <PaginationTab />
        </div>
      </div>
    </>
  );
}
