import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// created by chatGPT
export function isBase64Image(str: string) {
  const base64ImagePattern =
    /^data:image\/(png|jpeg|jpg|gif|webp);base64,([A-Za-z0-9+/=])+$/;

  return base64ImagePattern.test(str);
}
