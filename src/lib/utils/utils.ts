import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// tailwind merge export
export function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs))
}