import axios from "axios";
import { serverApi } from "../../lib/config";
import { Order, OrderInQuiry, UpdateOrder } from "../../lib/types/order";

class OrderService {
  private readonly path: string;
  constructor() {
    this.path = serverApi;
  }

  public async createOrder(): Promise<Order> {
    try {
      const url = `${this.path}/order/create`;
      const result = await axios.get(url, { withCredentials: true });
      return result.data.order;
    } catch (err) {
      console.log("Err, createOrder", err);
      throw err;
    }
  }

  public async getAllOrders(input: OrderInQuiry): Promise<Order[]> {
    try {
      const url = `${this.path}/order/all?page=${input.page}&limit=${input.limit}&orderStatus=${input.orderStatus}`;
      const result = await axios.get(url, { withCredentials: true });
      return result.data.order;
    } catch (err) {
      console.log("Err, getAllOrders", err);
      throw err;
    }
  }

  public async updateOrder(input: UpdateOrder): Promise<Order> {
    try {
      const url = `${this.path}/order/update`;
      const result = await axios.post(url, input, { withCredentials: true });
      return result.data.order;
    } catch (err) {
      console.log("Err, updateOrder", err);
      throw err;
    }
  }
}
