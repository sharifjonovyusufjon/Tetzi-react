import { Journal } from "./journal";
import { Product } from "./product";

/* APP STATE */

export interface AppRootState {
  homePage: HomePageState;
  //   shopPage: ShopPage;
}

export interface HomePageState {
  bestSeller: Product[];
  journal: Journal[];
}

export interface ShopPageState {}
