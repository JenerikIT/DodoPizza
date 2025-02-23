import { makeAutoObservable } from "mobx";
import { TPizza } from "../App";

class OrderCart {
  items: TPizza[] = [];
  totalPriceOrder = 0;
  constructor() {
    makeAutoObservable(this);
    this.loadCartOrder();
  }
  saveCartOrder = () => {
    localStorage.setItem("cartOrder", JSON.stringify(this.items));
  };
  loadCartOrder = () => {
    const itemsOrder = localStorage.getItem("cartOrder");
    if (itemsOrder) {
      this.items = JSON.parse(itemsOrder);
    }
  };
  addCartOrder = (item: TPizza) => {
    this.items.push(item);
    if (this.items.length > 5) {
      this.items = [];
    } else {
      this.saveCartOrder();
    }
  };
}

export default new OrderCart();
