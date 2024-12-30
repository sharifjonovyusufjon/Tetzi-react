import {
  Direction,
  ProductBrand,
  ProductCategory,
  ProductColor,
  ProductSize,
  ProductStatus,
} from "../enums/product.enum";

export interface Product {
  _id: string;
  productStatus: ProductStatus;
  productName: string;
  productBrand: ProductBrand;
  productCategory: ProductCategory;
  productPrice: number;
  productDesc: string;
  productImages: string[];
  productColor: ProductColor;
  productCount: number;
  productSize: ProductSize;
  productComments: number;
  productLikes: number;
  productViews: number;
  productRank: number;
  createdAt?: Date;
  updatedAt?: Date;

  /* from aggregate */
  productData?: [Comment];
}

interface PriceRange {
  start?: number;
  end?: number;
}

interface AlSearch {
  productCategory?: ProductCategory;
  productColor?: ProductColor;
  productBrand?: ProductBrand;
  productPrice?: PriceRange;
  text?: string;
}

export interface ProductInQuery {
  page: number;
  sort?: string;
  direction?: Direction;
  limit: number;
  search: AlSearch;
} 

export interface ProductBestSellerInQuery {
  page: number;
  limit: number;
}
