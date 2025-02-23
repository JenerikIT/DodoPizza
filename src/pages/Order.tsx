import { observer } from "mobx-react-lite";
import OrderProduct from "../components/OrderProduct";
import OrderCart from "../store/OrderCart";

type Props = {};

const Order = observer(({}: Props) => {
  const { items } = OrderCart;
  return (
    <div className="order wrap">
      <h1 className="title">Мои заказы</h1>
      {items.length ? (
        items.map((item: any, index) => (
          <OrderProduct item={item} numberOrder={index} />
        ))
      ) : (
        <div className="Empty Empty__order">
          <img
            className=""
            src="https://cdn.dodostatic.com/site-static/dist/assets/5aa5dac99a832c62f3ef..svg"
            alt="dfdfd"
          />
          <strong>Пока тут пусто</strong>
        </div>
      )}
    </div>
  );
});
export default Order;
{
  /* <div className="Empty Empty__order">
<img
  className=""
  src="https://cdn.dodostatic.com/site-static/dist/assets/5aa5dac99a832c62f3ef..svg"
  alt="dfdfd"
/>
<strong>Пока тут пусто</strong>
</div> */
}
