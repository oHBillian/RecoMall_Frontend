// components/ClientWrapper.tsx
"use client";

import { removeALL } from "@/lib/slice/Cartslice";
import { useAuth } from "@clerk/nextjs";
import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  const dispatch = useDispatch();
  const { userId, isLoaded } = useAuth();
  useEffect(() => {
    if (isLoaded && !userId) {
        console.log("User logged out, clearing cart");
        dispatch(removeALL());
      }
  
  }, [userId,dispatch,isLoaded]);

  return (
    <div>
      {/* อาจจะมีเงื่อนไขการแสดงผลตามสถานะ state */}
      {children}
    </div>
  );
}