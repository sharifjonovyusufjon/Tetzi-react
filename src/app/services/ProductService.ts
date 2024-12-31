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
      const {
        page,
        limit,
        direction,
        sort,
        productCategory,
        productColor,
        productBrand,
        start,
        end,
        text,
      } = input;

      let url = `${this.path}/product/all?page=${page}&sort=${sort}&limit=${limit}&direction=${direction}`;
      if (productCategory) url += `&productCategory=${productCategory}`;
      if (productBrand) url += `&productBrand=${productBrand}`;
      if (productColor) url += `&productColor=${productColor}`;
      if (start) url += `&start=${start}`;
      if (end) url += `&end=${end}`;
      if (text) url += `&text=${text}`;

      const result = await axios.get(url);
      return result.data;
    } catch (err) {
      console.log("Err, getProducts", err);
      throw err;
    }
  }
}

export default ProductService;
