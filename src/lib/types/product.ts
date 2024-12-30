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

export interface ProductInQuery {
  page: number;
  sort?: string;
  direction?: Direction;
  limit: number;
  productCategory?: ProductCategory;
  productColor?: ProductColor;
  productBrand?: ProductBrand;
  text?: string;
  start?: number;
  end?: number;
}

export interface ProductBestSellerInQuery {
  page: number;
  limit: number;
}
