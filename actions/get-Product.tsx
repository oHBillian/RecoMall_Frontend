import { Product } from "@/type"
const URL = `${process.env.API_URL}/products`
const GetProducts = async() : Promise<Product[]> => {
  const res = await fetch(URL);
  const data = await res.json();
  const formattedProducts: Product[] = data.map((item: any) => ({
    id: item.id,
    name: item.name,
    description: item.description,
    price: item.price,
    categoryId: item.categoryId,
    subcategoryId: item.subcategoryId,
    images: item.Images.map((img: any) => img.url) // สมมติว่า image object มี property ชื่อ url
}));

return formattedProducts;
}

export default GetProducts