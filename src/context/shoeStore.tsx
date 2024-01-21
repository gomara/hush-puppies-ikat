import type { Product } from '@prisma/client';
import type { StateCreator } from 'zustand';

export interface ShoeState {
  selectedShoe: Product | null;
  setSelectedShoe: (shoe: Product) => void;
}

export const createShoeStore: StateCreator<ShoeState> = (set) => ({
  selectedShoe: null,
  setSelectedShoe: (shoe) => set({ selectedShoe: shoe }),
});
