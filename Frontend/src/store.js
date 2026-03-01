import { create } from "zustand";
import { getAllProductData } from "./api/api";

export const useStore = create((set) => ({
    products: [],
    isLoading: false,
    error: null,
    setProducts: (products) => set({ products }),
    loadProducts: async () => {
        set({ isLoading: true, error: null });
        try {
            const products = await getAllProductData();
            set({ products, isLoading: false });
        } catch (error) {
            set({ error: error?.message ?? "Failed to load products", isLoading: false });
        }
    },
    cart: {},
    addToCart: (productId) =>
        set((state) => {
            const currentQuantity = state.cart[productId] ?? 0;
            return {
                cart: {
                    ...state.cart,
                    [productId]: currentQuantity + 1
                }
            };
        }),
    updateQuantity: (productId, quantity) =>
        set((state) => {
            if (quantity <= 0) {
                const nextCart = { ...state.cart };
                delete nextCart[productId];
                return { cart: nextCart };
            }

            return {
                cart: {
                    ...state.cart,
                    [productId]: quantity
                }
            };
        }),
    removeFromCart: (productId) =>
        set((state) => {
            const nextCart = { ...state.cart };
            delete nextCart[productId];
            return { cart: nextCart };
        }),
    clearCart: () => set({ cart: {} })
}));