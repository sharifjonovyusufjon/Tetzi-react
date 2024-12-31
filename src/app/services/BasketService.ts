import axios from "axios";
import { serverApi } from "../../lib/config";
import { Basket, BasketInput, UpdateBasketInput } from "../../lib/types/basket";

class BasketService {
  private readonly path: string;
  constructor() {
    this.path = serverApi;
  }

  public async getAllBasket(): Promise<Basket[]> {
    try {
      const url = `${this.path}/basket/all`;
      const result = await axios.get(url, { withCredentials: true });
      return result.data.basket;
    } catch (err) {
      console.log("Err, getAllBasket", err);
      throw err;
    }
  }

  public async createBasket(input: BasketInput): Promise<Basket> {
    try {
      const url = `${this.path}/basket/create`;
      const result = await axios.post(url, input, { withCredentials: true });
      return result.data.basket;
    } catch (err) {
      console.log("Err, createBasket", err);
      throw err;
    }
  }

  public async updateBasket(input: UpdateBasketInput): Promise<Basket> {
    try {
      const url = `${this.path}/basket/update`;
      const result = await axios.post(url, input, { withCredentials: true });
      return result.data.basket;
    } catch (err) {
      console.log("Err, updateBasket", err);
      throw err;
    }
  }
}

export default BasketService;
