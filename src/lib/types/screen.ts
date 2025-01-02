import { Basket } from "./basket";
import { Journal } from "./journal";
import { Member } from "./member";
import { Order } from "./order";
import { Product } from "./product";

/* APP STATE */

export interface AppRootState {
  homePage: HomePageState;
  shopPage: ShopPageState;
  userPage: UserPageState;
  journalPage: JournalPageState;
  ordersPage: OrdersPageState;
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

export interface UserPageState {
  getOrders: Order[];
  getBaskets: Basket[];
}

export interface JournalPageState {
  getJournals: Journal[];
  chosenJournal: Journal | null;
}

export interface OrdersPageState {
  pausedOrders: Order[];
  processOrders: Order[];
  finishOrders: Order[];
}
