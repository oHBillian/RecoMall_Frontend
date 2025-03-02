import toast from "react-hot-toast";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/order`;
const PostOrder = async (orderData) => {
  try {
    const res = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    toast.error("บางอย่างผิดพลาด")
  }
};

export default PostOrder;
