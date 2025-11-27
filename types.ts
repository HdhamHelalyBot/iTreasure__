
export type Language = 'en' | 'ar';
export type Theme = 'light' | 'dark';

export interface Category {
  id: string;
  name: { [key in Language]: string };
  imageUrl: string;
}

export interface Product {
  id: string;
  name: { [key in Language]: string };
  description: { [key in Language]: string };
  imageUrl: string;
}

export interface Translations {
  [key: string]: any;
}
