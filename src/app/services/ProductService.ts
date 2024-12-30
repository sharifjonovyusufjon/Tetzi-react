import axios from "axios";
import { serverApi } from "../../lib/config";
import {
  Product,
  ProductBestSellerInQuery,
  ProductInQuery,
} from "../../lib/types/product";

class ProductService {
  private readonly path: string;
  constructor() {
    this.path = serverApi;
  }

  public async getBestSeller(
    input: ProductBestSellerInQuery
  ): Promise<Product[]> {
    try {
      const { page, limit } = input;
      const url = `${this.path}/product/sellers?page=${page}&limit=${limit}`;

      const result = await axios.get(url);
      return result.data;
    } catch (err) {
      console.log("Err, getBestSeller", err);
      throw err;
    }
  }

  public async getProducts(input: ProductInQuery): Promise<Product[]> {
    try {
      const { page, limit, search, direction, sort } = input;
      const {
        productCategory,
        productColor,
        productBrand,
        productPrice,
        text,
      } = search;

      let url = `${this.path}/product/all?page=${page}&sort=${sort}&limit=${limit}&search&direction=${direction}`;

      const result = await axios.get(url);
      return result.data;
    } catch (err) {
      console.log("Err, getProducts", err);
      throw err;
    }
  }
}

export default ProductService;
