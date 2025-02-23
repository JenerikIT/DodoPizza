import ItemsPizza from "../store/ItemsPizza";
import ButtonProduct from "./ButtonProduct";
import { TPizza } from "../App";
import { observer } from "mobx-react-lite";

const FormOrderitem = observer(
  ({ name, imgUrl, price, count, description }: TPizza) => {
    const { removeProduct } = ItemsPizza;
    return (
      <div className="item">
        <div className="item__main">
          <img src={imgUrl} width={80} height={80} alt="" />
          <div className="info">
            <strong className="info__title">{name}</strong>
            <p className="info__description">{description}</p>
          </div>
        </div>
        <strong className="price">{price}₽</strong>
        <div className="container-total">
          <ButtonProduct name={name} count={count} />
          <svg
            onClick={() => removeProduct(name)}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L11 11M1 11L11 1"
              stroke="#C0C0C0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    );
  }
);

export default FormOrderitem;
