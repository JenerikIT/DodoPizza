import { observer } from "mobx-react-lite";
import { TPizza } from "../App";

const OrderItem = observer(
  ({ name, price, imgUrl, description, count }: TPizza) => {
    return (
      <div className="item">
        <div className="productInfo">
          <img src={imgUrl} width={100} height={100} alt="" />
          <div className="info">
            <div className="title">{name}</div>
            <div className="description">{description}</div>
          </div>
        </div>
        <div className="price">
          <strong>{price} ₽ </strong>
          <p>{count} шт.</p>
        </div>
      </div>
    );
  }
);

export default OrderItem;
