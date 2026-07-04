import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CartItem = { id: string; qty: number; note?: string };

type CartState = {
  items: CartItem[];
  add: (id: string, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  setNote: (id: string, note: string) => void;
  clear: () => void;
  count: () => number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (id, qty = 1) =>
        set((s) => {
          const existing = s.items.find((i) => i.id === id);
          if (existing) return { items: s.items.map((i) => (i.id === id ? { ...i, qty: i.qty + qty } : i)) };
          return { items: [...s.items, { id, qty }] };
        }),
      remove: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
      setQty: (id, qty) => set((s) => ({ items: s.items.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i)) })),
      setNote: (id, note) => set((s) => ({ items: s.items.map((i) => (i.id === id ? { ...i, note } : i)) })),
      clear: () => set({ items: [] }),
      count: () => get().items.reduce((n, i) => n + i.qty, 0),
    }),
    { name: 'rr-cart' }
  )
);
