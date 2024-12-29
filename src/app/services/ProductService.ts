import axios from "axios";
import { serverApi } from "../../lib/config";
import { Product, ProductBestSellerInQuery } from "../../lib/types/product";

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
      const url = `${serverApi}/product/sellers?page=${page}&limit=${limit}`;

      const result = await axios.get(url);
      return result.data;
    } catch (err) {
      console.log("Err, getBestSeller", err);
      throw err;
    }
  }
}

export default ProductService;
