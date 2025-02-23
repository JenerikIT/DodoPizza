import { memo } from "react";
import ItemsPizza from "../store/ItemsPizza";
import { observer } from "mobx-react-lite";

type Props = {
  name: string;
  count: number;
};

const ButtonProduct = memo(
  observer(({ name, count }: Props) => {
    const { MinisProduct, addProduct } = ItemsPizza;
    return (
      <div className="total">
        <img src="./img/Minus.svg" alt="" onClick={() => MinisProduct(name)} />
        <strong>{count}</strong>
        <img
          src="./img/PlusCard.svg"
          alt=""
          onClick={() => addProduct({ name })}
        />
      </div>
    );
  })
);

export default ButtonProduct;
