import { Journal } from "./journal";
import { Member } from "./member";
import { Product } from "./product";

/* APP STATE */

export interface AppRootState {
  homePage: HomePageState;
  shopPage: ShopPageState;
}

export interface HomePageState {
  bestSeller: Product[];
  journal: Journal[];
}

export interface ShopPageState {
  getProducts: Product[];
  chosenProduct: Product | null;
  admin: Member | null;
}
