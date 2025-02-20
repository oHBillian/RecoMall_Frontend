import { Category } from "@/type"
import qs from "query-string";
const URL = `${process.env.API_URL}/categories`
const GetMaincategories = async(categoryId: string) : Promise<Category[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
        categoryId
    }
})
const categories = await fetch(url);
return categories.json()
}

export default GetMaincategories