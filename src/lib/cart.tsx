import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { products } from "@/lib/products";

export type CartItem = {
  productId: string;
  color: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  add: (productId: string, color: string, quantity?: number) => void;
  remove: (productId: string, color: string) => void;
  setQuantity: (productId: string, color: string, quantity: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "herchoice-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const add = useCallback((productId: string, color: string, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.productId === productId && i.color === color,
      );
      if (existing) {
        return prev.map((i) =>
          i === existing ? { ...i, quantity: i.quantity + quantity } : i,
        );
      }
      return [...prev, { productId, color, quantity }];
    });
  }, []);

  const remove = useCallback((productId: string, color: string) => {
    setItems((prev) =>
      prev.filter((i) => !(i.productId === productId && i.color === color)),
    );
  }, []);

  const setQuantity = useCallback(
    (productId: string, color: string, quantity: number) => {
      setItems((prev) =>
        prev
          .map((i) =>
            i.productId === productId && i.color === color
              ? { ...i, quantity }
              : i,
          )
          .filter((i) => i.quantity > 0),
      );
    },
    [],
  );

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((sum, i) => sum + i.quantity, 0);
    const subtotal = items.reduce((sum, i) => {
      const product = products.find((p) => p.id === i.productId);
      return sum + (product ? product.price * i.quantity : 0);
    }, 0);
    return {
      items,
      count,
      subtotal,
      drawerOpen,
      setDrawerOpen,
      add,
      remove,
      setQuantity,
      clear,
    };
  }, [items, drawerOpen, add, remove, setQuantity, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
