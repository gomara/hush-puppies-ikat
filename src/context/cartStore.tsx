import type { Product } from '@prisma/client';
import type { StateCreator } from 'zustand';

interface CartItem extends Product {
  size: number;
  quantity: number;
}

export interface CartState {
  cart: CartItem[];
  addToCart: (shoe: Product, size: number) => void;
  removeFromCart: (shoe: Product, size: number) => void;
  finishPurchase: () => void;
  cartTotal: number;
  cartItems: number;
  activeConfetti: boolean;
}

export const createCartStore: StateCreator<CartState> = (set) => ({
  cart: [],
  cartTotal: 0,
  cartItems: 0,
  activeConfetti: false,
  addToCart: (shoe, size) =>
    set((state) => {
      const cartItem = state.cart.find(
        (cartShoe) => cartShoe.id === shoe.id && cartShoe.size === size,
      );

      if (cartItem) {
        cartItem.quantity += 1;

        return {
          cart: [...state.cart],
          cartTotal: state.cartTotal + shoe.price,
          cartItems: state.cartItems + 1,
        };
      }

      return {
        cart: [...state.cart, { ...shoe, size, quantity: 1 }],
        cartTotal: state.cartTotal + shoe.price,
        cartItems: state.cartItems + 1,
      };
    }),
  removeFromCart: (shoe, size) =>
    set((state) => {
      let priceToSubstract = 0;
      const updatedCart = state.cart
        .map((cartShoe) => {
          if (cartShoe.id === shoe.id && cartShoe.size === size) {
            priceToSubstract = cartShoe.price;

            return {
              ...cartShoe,
              quantity: Math.max(cartShoe.quantity - 1, 0),
            };
          }

          return cartShoe;
        })
        .filter((shoe) => shoe.quantity > 0);

      return {
        cart: updatedCart,
        cartTotal: state.cartTotal - priceToSubstract,
        cartItems: state.cartItems - 1,
      };
    }),
  finishPurchase: () =>
    set(() => ({
      cart: [],
      cartTotal: 0,
      cartItems: 0,
      activeConfetti: true,
    })),
});
