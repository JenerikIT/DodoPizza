import { observer } from "mobx-react-lite";
import { TPizza } from "../App";
import Value from "../store/Value";
type TClickSearch = {
  onChangeProduct: (id: boolean) => void;
};
const CardSearch = observer(
  ({ imgUrl, price, name, onChangeProduct }: TPizza & TClickSearch) => {
    const { searchvalueInput } = Value;

    return (
      <div
        className="cardSearch"
        onClick={() => {
          onChangeProduct(false);
          searchvalueInput(name);
        }}
      >
        <div className="fone-img">
          <img src={imgUrl} alt="" width={35} height={35} />
        </div>
        <span>{name}</span>
        <p>{price[0]}</p>
      </div>
    );
  }
);

export default CardSearch;
