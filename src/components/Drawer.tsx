import { observer } from "mobx-react-lite";
import ItemsPizza from "../store/ItemsPizza";
import Cart from "./Cart";
import { Link } from "react-router-dom";

type Props = {
  openDrawer: boolean;
  onClickDrawer: (value: boolean) => void;
};

const Drawer = observer(({ openDrawer, onClickDrawer }: Props) => {
  const { itemsCart, totalPrice } = ItemsPizza;
  return (
    <div className="DRAWER">
      <div className={`drawer ${openDrawer ? "active" : ""}`}></div>
      <div className={`container-drawer ${openDrawer ? "active" : ""}`}>
        <div className="container-drawer__title">
          <div className="text">
            <h1>В корзине</h1>
            <strong>{itemsCart.length} товара</strong>
          </div>
          <svg
            className="closeBtn"
            onClick={() => onClickDrawer(false)}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="1"
              d="M11.6328 9.94495L19.7328 1.84495C19.9149 1.63239 20.01 1.35898 19.9992 1.07934C19.9884 0.799697 19.8724 0.534431 19.6746 0.336549C19.4767 0.138666 19.2114 0.0227402 18.9318 0.011939C18.6521 0.00113767 18.3787 0.096256 18.1662 0.278285L10.0662 8.37829L1.96616 0.267174C1.7536 0.0851447 1.48019 -0.00997263 1.20055 0.00082865C0.920905 0.0116299 0.65564 0.127554 0.457757 0.325437C0.259874 0.52332 0.143948 0.788585 0.133147 1.06823C0.122346 1.34787 0.217464 1.62128 0.399494 1.83384L8.49949 9.94495L0.388382 18.045C0.272069 18.1446 0.177602 18.2671 0.11091 18.405C0.044217 18.5428 0.00673853 18.693 0.000827977 18.846C-0.00508257 18.999 0.0207018 19.1516 0.0765624 19.2942C0.132423 19.4368 0.217154 19.5663 0.325438 19.6746C0.433721 19.7828 0.563218 19.8676 0.705801 19.9234C0.848384 19.9793 1.00098 20.0051 1.154 19.9992C1.30702 19.9933 1.45717 19.9558 1.59502 19.8891C1.73287 19.8224 1.85544 19.7279 1.95505 19.6116L10.0662 11.5116L18.1662 19.6116C18.3787 19.7936 18.6521 19.8888 18.9318 19.878C19.2114 19.8672 19.4767 19.7512 19.6746 19.5534C19.8724 19.3555 19.9884 19.0902 19.9992 18.8106C20.01 18.5309 19.9149 18.2575 19.7328 18.045L11.6328 9.94495Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="group-items">
          {itemsCart.length ? (
            itemsCart.map((obj: any) => <Cart {...obj} key={obj.id} />)
          ) : (
            <div className="Empty">
              <img
                className=""
                src="https://cdn.dodostatic.com/site-static/dist/assets/5aa5dac99a832c62f3ef..svg"
                alt="dfdfd"
              />
              <strong>Пока тут пусто</strong>
            </div>
          )}
        </div>
        {itemsCart.length ? (
          <div className="footer-pay">
            <div className="footer-pay__result">
              <span>Итого: </span>
              <div className="dashed"></div>
              <strong>{totalPrice} ₽ </strong>
            </div>
            <Link to="/Оформление">
              <button className="footer-pay__order">
                <span>Оформить заказ</span>
                <svg
                  className="footer-pay__img"
                  width="14"
                  height="13"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7.21167H14.7143"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.71436 1.21753L14.7144 7.21161L8.71436 13.2057"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
});
export default Drawer;
