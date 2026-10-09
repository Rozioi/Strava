

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// 1. Описываем типы данных
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

// 2. Описываем интерфейс самого стора (State + Actions)
interface CartState {
  items: CartItem[];
  totalAmount: number;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

// 3. Создаем стор с мидлваром persist (чтобы корзина не пропадала при обновлении)
export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      // Начальное состояние
      items: [],
      totalAmount: 0,

      // Действия
      addItem: (newItem) => set((state) => {
        const existingItem = state.items.find((item) => item.id === newItem.id);

        let updatedItems;
        if (existingItem) {
          updatedItems = state.items.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          updatedItems = [...state.items, { ...newItem, quantity: 1 }];
        }

        // Пересчитываем сумму
        const newTotal = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

        return {
          items: updatedItems,
          totalAmount: newTotal
        };
      }),

      removeItem: (id) => set((state) => {
        const updatedItems = state.items.filter((item) => item.id !== id);
        const newTotal = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        return { items: updatedItems, totalAmount: newTotal };
      }),

      updateQuantity: (id, quantity) => set((state) => {
        if (quantity < 1) return state; // Защита от отрицательных чисел

        const updatedItems = state.items.map((item) =>
          item.id === id ? { ...item, quantity } : item
        );
        const newTotal = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

        return { items: updatedItems, totalAmount: newTotal };
      }),

      clearCart: () => set({ items: [], totalAmount: 0 }),
    }),
    {
      name: 'cart-storage', // Уникальное имя ключа в localStorage
      storage: createJSONStorage(() => localStorage), // Где храним
    }
  )
);
