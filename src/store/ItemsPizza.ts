import { makeAutoObservable, runInAction } from "mobx";
import { TPizza } from "../App";

class ItemsPizza {
  itemsCart: TPizza[] = [];
  collectFilter: boolean = false;
  totalPrice = 0;
  changeCollect = () => {
    this.collectFilter = !this.collectFilter;
  };
  saveCart = () => {
    localStorage.setItem("cart", JSON.stringify(this.itemsCart));
    localStorage.setItem("totalPrice", JSON.stringify(this.totalPrice));
  };
  loadCart = () => {
    const storedCart = localStorage.getItem("cart");
    const storedTotalPrice = localStorage.getItem("totalPrice");
    if (storedCart && storedTotalPrice) {
      this.itemsCart = JSON.parse(storedCart);
      this.totalPrice = JSON.parse(storedTotalPrice);
    }
  };
  constructor() {
    makeAutoObservable(this);
    this.loadCart();
  }
  getTotalPrice = () => {
    this.totalPrice = this.itemsCart.reduce((sum, obj) => {
      return sum + obj.count * obj.price;
    }, 0);
  };
  addProduct = (obj: any) => {
    const findItems = this.itemsCart.find(({ name }) => name === obj.name);
    runInAction(() => {
      if (!findItems) {
        this.itemsCart.push({ ...obj, count: 1 });
      } else {
        findItems.count++;
      }
    });
    this.getTotalPrice();
    this.saveCart();
  };
  removeProduct = (name: string) => {
    this.itemsCart = this.itemsCart.filter((obj: any) => obj.name !== name);
    this.getTotalPrice();
    this.saveCart();
  };
  MinisProduct = (name: string) => {
    runInAction(() => {
      const findItems = this.itemsCart.find((obj) => obj.name === name);
      if (findItems && findItems.count !== 1) {
        findItems.count -= 1;
      } else {
        this.removeProduct(name);
      }
      this.getTotalPrice();

      this.saveCart();
    });
  };
  clearBasket = () => {
    this.itemsCart = [];
    this.saveCart();
  };
}
export default new ItemsPizza();

// addProduct(state, action: PayloadAction<TCartItem>) {
//   const findItems = state.items.find((obj) => obj.id === action.payload.id);
//   if (findItems) {
//     findItems.count++;
//   } else {
//     state.items.push({ ...action.payload, count: 1 });
//   }
//   state.totalPrice = getTotalPrice(state.items);
// },
