import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function getRandomShoeSizeStarter() {
  return Math.floor(Math.random() * (10 - 6 + 1)) + 6;
}

export function getShoeSizes() {
  const sizes = [];
  const starter = getRandomShoeSizeStarter();
  const max = starter + 4.5;

  for (let i = starter; i <= max; i += 0.5) {
    sizes.push(i);
  }

  return sizes;
}
