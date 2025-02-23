import { makeAutoObservable, runInAction } from "mobx";
class Category {
  activeCategoryID = 0;
  constructor() {
    makeAutoObservable(this);
  }
  setActiveCategoryID = (id: number) => {
    runInAction(() => {
      this.activeCategoryID = id;
    });
  };
}

export default new Category();
