import { makeAutoObservable } from "mobx";
type Props = {
  name: string;
  state: string;
};
class PopUpFilter {
  statePopUp = {
    name: "рейтингу",
    state: "rating",
  };
  constructor() {
    makeAutoObservable(this);
  }
  setStatePopUp = (obj: Props) => {
    this.statePopUp = obj;
  };
}

export default new PopUpFilter();
