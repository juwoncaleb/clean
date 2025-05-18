import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (item) => {
        const cart = get().cart;
        const existingIndex = cart.findIndex((i) => i.slug === item.slug);

        if (existingIndex !== -1) {
          const updatedCart = [...cart];
          const existingItem = updatedCart[existingIndex];
          const newQuantity = existingItem.quantity + item.quantity;

          updatedCart[existingIndex] = {
            ...existingItem,
            quantity: newQuantity,
            totalPrice: newQuantity * existingItem.price,
          };

          set({ cart: updatedCart });
        } else {
          const newItem = {
            ...item,
            quantity: item.quantity || 1,
            totalPrice: item.price * (item.quantity || 1),
          };
          set({ cart: [...cart, newItem] });
        }
      },

      removeFromCart: (slug) => {
        const cart = get().cart;
        set({ cart: cart.filter((item) => item.slug !== slug) });
      },

      increaseQuantity: (slug) => {
        const cart = get().cart;
        const updatedCart = cart.map((item) =>
          item.slug === slug
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: (item.quantity + 1) * item.price,
              }
            : item
        );
        set({ cart: updatedCart });
      },

      decreaseQuantity: (slug) => {
        const cart = get().cart;
        const updatedCart = cart.map((item) => {
          if (item.slug === slug) {
            const newQty = item.quantity - 1 > 0 ? item.quantity - 1 : 1;
            return {
              ...item,
              quantity: newQty,
              totalPrice: newQty * item.price,
            };
          }
          return item;
        });
        set({ cart: updatedCart });
      },
      // Inside your Zustand store
getUniqueItemCount: () => {
  const cart = get().cart;
  return cart.length; // Each product counts as 1, regardless of quantity
},

      clearCart: () => set({ cart: [] }),

      getTotalItems: () => {
        const cart = get().cart;
        return cart.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: "cart-storage", // localStorage key
    }
  )
);
