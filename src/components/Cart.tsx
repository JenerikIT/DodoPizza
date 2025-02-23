import { TPizza } from "../App";
import ButtonProduct from "./ButtonProduct";

const Cart = ({ price, imgUrl, description, name, count }: TPizza) => {
  return (
    <div className="cart">
      <img src={imgUrl} width={110} height={110} alt="" />
      <div className="info">
        <strong>{name}</strong>
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="price">
          <ButtonProduct name={name} count={count} />
          <strong>{price} ₽</strong>
        </div>
      </div>
    </div>
  );
};

export default Cart;
