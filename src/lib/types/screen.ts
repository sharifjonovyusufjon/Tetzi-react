import { Journal } from "./journal";
import { Product } from "./product";

/* APP STATE */

export interface AppRootState {
  homePage: HomePage;
  //   shopPage: ShopPage;
}

export interface HomePage {
  bestSeller: Product[];
  journal: Journal[];
}

export interface ShopPage {}
