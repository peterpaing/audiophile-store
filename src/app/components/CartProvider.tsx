"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import CartDrawer from "@/app/components/CartDrawer";
import { products, type Product } from "@/product-data";

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  cartCount: number;
  total: number;
  isCartOpen: boolean;
  addToCart: (product: Product, quantity: number) => void;
  openCart: () => void;
  closeCart: () => void;
  clearCart: () => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
};

type StoredCartItem = {
  productId: number;
  quantity: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [hasLoadedCart, setHasLoadedCart] = useState(false);

  useEffect(() => {
    const savedCart = window.localStorage.getItem("audiophile-cart");

    if (savedCart) {
      const storedItems: StoredCartItem[] = JSON.parse(savedCart);

      const restoredItems = storedItems.flatMap((storedItem) => {
        const product = products.find(
          (item) => item.id === storedItem.productId,
        );

        return product
          ? [{ product, quantity: storedItem.quantity }]
          : [];
      });

      setItems(restoredItems);
    }

    setHasLoadedCart(true);
  }, []);

  useEffect(() => {
    if (!hasLoadedCart) {
      return;
    }

    const storedItems: StoredCartItem[] = items.map((item) => ({
      productId: item.product.id,
      quantity: item.quantity,
    }));

    window.localStorage.setItem("audiophile-cart", JSON.stringify(storedItems));
  }, [hasLoadedCart, items]);

  const cartCount = useMemo(() => {
    return items.reduce((totalQuantity, item) => {
      return totalQuantity + item.quantity;
    }, 0);
  }, [items]);

  const total = useMemo(() => {
    return items.reduce((cartTotal, item) => {
      return cartTotal + item.product.price * item.quantity;
    }, 0);
  }, [items]);

  const addToCart = (product: Product, quantity: number) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.product.id === product.id,
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      return [...currentItems, { product, quantity }];
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      setItems((currentItems) =>
        currentItems.filter((item) => item.product.id !== productId),
      );
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  const removeFromCart = (productId: number) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.product.id !== productId),
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const value: CartContextValue = {
    items,
    cartCount,
    total,
    isCartOpen,
    addToCart,
    openCart: () => setIsCartOpen(true),
    closeCart: () => setIsCartOpen(false),
    clearCart,
    removeFromCart,
    updateQuantity,
  };

  return (
    <CartContext.Provider value={value}>
      {children}

      <CartDrawer
        items={items}
        total={total}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onClear={clearCart}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider.");
  }

  return context;
}