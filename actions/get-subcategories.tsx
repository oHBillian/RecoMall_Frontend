import { SubCategory } from "@/type"
import qs from "query-string";
const URL = `${process.env.API_URL}/subcategory`
const GetSubcategories = async(categoryId: string) : Promise<SubCategory> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            categoryId
        }
    })
  const subcategories = await fetch(url);
  return subcategories.json()
}

export default GetSubcategories