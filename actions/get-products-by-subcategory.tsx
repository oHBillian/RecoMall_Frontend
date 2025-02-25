import { Product } from "@/type"
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

const getProductsBySubcategory = async (subcategoryId: string): Promise<Product[]> => {
    const url = qs.stringifyUrl({
      url: URL,
      query: {
        subcategoryId,
      }
    });
  
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
  
  export default getProductsBySubcategory;