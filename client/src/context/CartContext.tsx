import React, { createContext, useState, useContext, useEffect } from 'react';

export interface MenuItem {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
  tag?: string;
  tagColor?: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

interface CartContextType {
  cart: Cart;
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  toggleCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'aromaCafeCart';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Cart>({
    items: [],
    totalItems: 0,
    totalPrice: 0
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse saved cart:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  // Calculate totals whenever items change
  const calculateTotals = (items: CartItem[]): Cart => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => {
      // Remove currency symbol and convert to number
      const priceValue = parseFloat(item.menuItem.price.replace(/[^0-9.]/g, ''));
      return sum + (priceValue * item.quantity);
    }, 0);

    return {
      items,
      totalItems,
      totalPrice
    };
  };

  const addToCart = (menuItem: MenuItem) => {
    setCart((prevCart: Cart) => {
      const existingItem = prevCart.items.find((item: CartItem) => item.menuItem.id === menuItem.id);
      
      let updatedItems: CartItem[];
      
      if (existingItem) {
        // If item already exists, increase quantity
        updatedItems = prevCart.items.map((item: CartItem) => 
          item.menuItem.id === menuItem.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // If item doesn't exist, add new item with quantity 1
        updatedItems = [...prevCart.items, { menuItem, quantity: 1 }];
      }
      
      return calculateTotals(updatedItems);
    });
    
    // Open the cart when an item is added
    if (!isCartOpen) {
      setIsCartOpen(true);
    }
  };

  const removeFromCart = (itemId: number) => {
    setCart((prevCart: Cart) => {
      const updatedItems = prevCart.items.filter((item: CartItem) => item.menuItem.id !== itemId);
      return calculateTotals(updatedItems);
    });
  };

  const updateQuantity = (itemId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    setCart((prevCart: Cart) => {
      const updatedItems = prevCart.items.map((item: CartItem) => 
        item.menuItem.id === itemId 
          ? { ...item, quantity } 
          : item
      );
      
      return calculateTotals(updatedItems);
    });
  };

  const clearCart = () => {
    setCart({
      items: [],
      totalItems: 0,
      totalPrice: 0
    });
  };

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      isCartOpen,
      toggleCart,
      closeCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};