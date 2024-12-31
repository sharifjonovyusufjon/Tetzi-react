import { Product } from "./product";

export interface BasketInput {
  basketTotal?: number;
  basketQuantity: number;
  productPrice?: number;
  memberId?: string;
  productId?: string;
}

export interface Basket {
  _id: string;
  basketTotal: number;
  basketQuantity: number;
  productPrice: number;
  memberId: string;
  productId: string;
  productData: Product;
}

export interface UpdateBasketInput {
  _id: string;
  count: number;
  memberId?: string;
}
