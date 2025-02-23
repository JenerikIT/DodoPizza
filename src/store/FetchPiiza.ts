import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";
import { TPizza } from "../App";

class PizzaStore {
  itemsPizza: TPizza[] = [];
  loading = true;
  constructor() {
    makeAutoObservable(this);
  }
  FetchPizza = async () => {
    this.loading = true; // Устанавливаем loading в true
    try {
      const { data } = await axios.get(
        "https://674231a5e464749900900a7b.mockapi.io/ItemsPizza"
      );
      runInAction(() => {
        this.itemsPizza = data; // Изменение состояния в runInAction
        this.loading = false; // Устанавливаем loading в false
      });
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
      alert("Не удалось загрузить пиццы. Попробуйте позже.");
      runInAction(() => {
        this.loading = false; // Устанавливаем loading в false даже в случае ошибки
      });
    }
  };
}

const pizzaStore = new PizzaStore();
export default pizzaStore;
