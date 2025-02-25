"use client"
import { Button } from "@/components/ui/button";
import { removeItem, updateQuantity } from "@/lib/slice/Cartslice";
import { RootState } from "@/lib/store";
import { Trash, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);
  console.log(items)

  const increaseQuantity = (id: string) => {
    const item = items.find(item => item.id === id);
    if (item) {
      dispatch(updateQuantity({
        id: item.id,
        quantity: (item.quantity || 1) + 1
      }));
    }
  };

  // ฟังก์ชันลดจำนวนสินค้า
  const decreaseQuantity = (id: string) => {
    const item = items.find(item => item.id === id);
    if (item && (item.quantity || 1) > 1) {
      dispatch(updateQuantity({
        id: item.id,
        quantity: (item.quantity || 1) - 1
      }));
    }
  };

  // คำนวณราคารวม
  const totalPrice = items.reduce((sum, item) => 
    sum + Number(item.price) * (item.quantity || 1), 0);

  // เช็คว่าตะกร้าว่างไหม
  const isCartEmpty = items.length === 0;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center gap-2 mb-6">
        <ShoppingCart className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold">ตะกร้าสินค้า</h1>
      </div>
      
      {isCartEmpty ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <ShoppingCart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-lg text-gray-500">ตะกร้าสินค้าของคุณว่างเปล่า</p>
          <div className="flex justify-center mt-2">
            <Link href={"/"}>
              <div className="flex items-center px-8 py-2 rounded-md bg-black text-white text-sm w-fit">เลือกซื้อสินค้า</div>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border">
            <div className="grid grid-cols-12 bg-gray-50 p-4 text-sm font-medium text-gray-500">
              <div className="col-span-6">สินค้า</div>
              <div className="col-span-2 text-center">ราคา</div>
              <div className="col-span-2 text-center">จำนวน</div>
              <div className="col-span-2 text-right">รวม</div>
            </div>
            
            <ul className="divide-y divide-gray-100">
              {items.map((item) => (
                <li key={item.id} className="grid grid-cols-12 p-4 items-center">
                  <div className="col-span-6 flex items-center gap-4">
                    <div className="bg-gray-100 w-16 h-16 rounded-md flex items-center justify-center">
                      {item.image ? (
                        <Image src={item.image} alt={item.name} width={64} height={64} className="object-cover rounded-md" />
                      ) : (
                        <ShoppingCart className="h-6 w-6 text-gray-400" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                    </div>
                  </div>
                  <div className="col-span-2 text-center">${Number(item.price).toLocaleString()}</div>
                  <div className="col-span-2 text-center">
                    <div className="inline-flex items-center">
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-r-none" onClick={() => decreaseQuantity(item.id)}>-</Button>
                      <div className="h-8 w-10 flex items-center justify-center border-t border-b">
                        {item.quantity || 1}
                      </div>
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-l-none" onClick={() => increaseQuantity(item.id)}>+</Button>
                    </div>
                  </div>
                  <div className="col-span-2 flex justify-end items-center gap-2">
                    <div className="font-medium">
                      ${(Number(item.price) * (item.quantity || 1)).toLocaleString()}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 text-gray-500 hover:text-red-500" 
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-6 bg-white rounded-lg shadow-sm border p-6">
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">ยอดรวมสินค้า</span>
              <span className="font-medium">${totalPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">ค่าจัดส่ง</span>
              <span className="font-medium">ฟรี</span>
            </div>
            <div className="border-t pt-4 flex justify-between">
              <span className="text-lg font-semibold">ยอดรวมทั้งหมด</span>
              <span className="text-lg font-semibold">${totalPrice.toLocaleString()}</span>
            </div>
            <div className="mt-6 flex justify-end gap-4">
              <Button variant="outline">ซื้อสินค้าต่อ</Button>
              <Button>ชำระเงิน</Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;