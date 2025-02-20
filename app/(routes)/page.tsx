import GetProducts from "@/actions/get-Product";
import ProductList from "@/components/productlist";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
export default async function Home() {
  const products = await GetProducts();

  return (
    <>
      <div className="h-full">
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
                  placeholder="Search..."
                  className="bg-white border-none"
                />
                <button className="ml-2 mr-2 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-300">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-2/3">
          <ProductList data={products} />
        </div>
      </div>
    </>
  );
}
