import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
import { persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

// แก้บัค noop
const createNoopStorage = () => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      return Promise.resolve();
    },
  };
};

// ใช้ storage ที่เหมาะสมตามสภาพแวดล้อม
const storage = typeof window !== 'undefined'
  ? createWebStorage('local')
  : createNoopStorage();

// อัปเดต interface เพื่อรองรับ quantity
interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  quantity?: number; // เพิ่ม quantity เป็นตัวเลือก
}

// ข้อมูลสำหรับการอัปเดต quantity
interface UpdateQuantityPayload {
  id: string;
  quantity: number;
}

interface CartState {
  items: Product[];
}

const initialState: CartState = { items: [] };

const Cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const exitItem = state.items.find((item: Product) => item.id === action.payload.id);
      if (exitItem) {
        toast.error("มีสินค้าในตะกร้าแล้ว")
        return;
      }
      // เพิ่มสินค้าพร้อมกำหนด quantity เริ่มต้นเป็น 1
      state.items.push({
        ...action.payload,
        quantity: 1
      });
      toast.success("แอดสินค้าสำเร็จ")
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item: Product) => item.id !== action.payload);
      toast.success("ลบสำเร็จ")
    },
    removeALL: (state) => {
      state.items = [];
    },
    // เพิ่ม action ใหม่สำหรับอัปเดต quantity
    updateQuantity: (state, action: PayloadAction<UpdateQuantityPayload>) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      
      if (item) {
        item.quantity = quantity;
      }
    },
  }
});

const persistConfig = {
  key: "cart",
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, Cartslice.reducer);

export const { addItem, removeItem, removeALL, updateQuantity } = Cartslice.actions;
export { persistedCartReducer };