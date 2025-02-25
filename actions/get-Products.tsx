import { Product } from "@/type"
import queryString from "query-string";
const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`
const GetProducts = async(page: number) : Promise<Product[]> => {
  const url = queryString.stringifyUrl({
    url: URL,
    query: {
      page,
    }
  })
  const res = await fetch(url);
  const data = await res.json();
  const formattedProducts: Product[] = data.map((item: any) => ({
    id: item.id,
    name: item.name,
    description: item.description,
    price: item.price,
    categoryname: item.category.name,
    categoryId: item.categoryId,
    subcategoryId: item.subcategoryId,
    images: item.Images.map((img: any) => img.url)
}));

return formattedProducts;
}

export default GetProducts