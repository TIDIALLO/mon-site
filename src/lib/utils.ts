import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combine et fusionne intelligemment des classes CSS
 * Utilise clsx pour combiner les classes conditionnelles et twMerge pour fusionner les classes Tailwind
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
} 