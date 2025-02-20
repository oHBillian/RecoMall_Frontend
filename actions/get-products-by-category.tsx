import { Product } from "@/type"
import qs from "query-string";

const URL = `${process.env.API_URL}/products`

const getProductsByCategory = async (categoryId: string): Promise<Product[]> => {
    const url = qs.stringifyUrl({
      url: URL,
      query: {
        categoryId,
      }
    });
  
    const res = await fetch(url);
    const data = await res.json();
    
    const formattedProducts: Product[] = data.map((item: any) => ({
      id: item.id,
      name: item.name,
      description: item.description,
      price: item.price,
      categoryId: item.categoryId,
      subcategoryId: item.subcategoryId,
      images: item.Images.map((img: any) => img.url)
    }));
  
    return formattedProducts;
  }
  
  export default getProductsByCategory;