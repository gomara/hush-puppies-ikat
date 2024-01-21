import type { CartState } from './cartStore';
import type { ShoeState } from './shoeStore';

import { create } from 'zustand';

import { createCartStore } from './cartStore';
import { createShoeStore } from './shoeStore';

export const useBoundShoeStore = create<ShoeState & CartState>()((...a) => ({
  ...createShoeStore(...a),
  ...createCartStore(...a),
}));
