import {  useState } from "react";
import OrderItem from "./OrderItem";
import { observer } from "mobx-react-lite";
import { TPizza } from "../App";

type Props = {
  item: TPizza[];
  numberOrder: number;
};

const OrderProduct = observer(({ item, numberOrder }: Props) => {
  const getToTalPrice = () => {
    return item.reduce(
      (sum: number, obj: TPizza) => sum + obj.count * obj.price,
      0
    );
  };
  const [activeOrder, SetActiveOrder] = useState(true);
  return (
    <div className={`group ${activeOrder ? "active" : ""}`}>
      <div className="card">
        <div className="title">
          <div className="number">
            <strong>Заказ #{numberOrder + 1}</strong>
            <p className="description">Анука чекни что там? </p>
          </div>
          <div className="info-status">
            <div className="state">Оплачено</div>
            <img
              className={`statusImg ${activeOrder ? "active" : ""}`}
              src="./img/btn>.svg"
              width={15}
              height={15}
              alt=""
              onClick={() => SetActiveOrder(!activeOrder)}
            />
          </div>
        </div>
        <div className="items">
          {item.map((obj) => (
            <OrderItem {...obj} />
          ))}
        </div>
        <div className="resultPrice">
          <span>Итого:</span>
          <strong>{getToTalPrice()} ₽</strong>
        </div>
      </div>
    </div>
  );
});

export default OrderProduct;
