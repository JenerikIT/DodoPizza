import { makeAutoObservable } from "mobx";

class valueInput {
  valueInput = "";
  valuePriceMin = "";
  valuePriceMax = "";
  trueValue = false;
  constructor() {
    makeAutoObservable(this);
  }

  searchvalueInput = (str: string) => (this.valueInput = str);
  addValueMin = (str: string) => (this.valuePriceMin = str);
  addValueMax = (str: string) => (this.valuePriceMax = str);
  ValueIsTrue = (i: boolean) => (this.trueValue = i);
}
export default new valueInput();
