
import { OrderStatus } from "../enums/order.enum";

export interface OrderInput {
  orderStatus: OrderStatus;
  orderTotal: number;
  orderDelivery: number;
  memberId: string;
}

export interface Order {
  _id: string;
  orderStatus: OrderStatus;
  orderTotal: number;
  orderDelivery: number;
  memberId: string;

  /* from aggregate */

  orderItemData?: [];
  productData?: [];
}

export interface OrderItemInput {
  itemQuantity: number;
  itemPrice: number;
  orderId: string;
  productId: string;
}

export interface OrderItem {
  itemQuantity: number;
  itemPrice: number;
  orderId: string;
  productId: string;
}

export interface OrderInQuiry {
  page: number;
  limit: number;
  orderStatus: OrderStatus;
}

export interface UpdateOrder {
  orderId: string;
  orderStatus: OrderStatus;
}
