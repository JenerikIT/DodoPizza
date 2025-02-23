import { observer } from "mobx-react-lite";
import ItemsPizza from "../store/ItemsPizza";
import FormOrderitem from "../components/FormOrderitem";
import OrderCart from "../store/OrderCart";
import { useNavigate } from "react-router-dom";

import MyForm from "../components/MyForm";

import Value from "../store/Value";

type Props = {};

const OrderForm = observer(({}: Props) => {
  const { itemsCart, clearBasket, totalPrice } = ItemsPizza;
  const { addCartOrder } = OrderCart;
  const navigate = useNavigate();
  const handlePayment = () => {
    clearBasket();
    addCartOrder(itemsCart);
  };
  const { trueValue } = Value;
  return (
    <div className="container wrap ">
      {itemsCart.length ? (
        <div className="formOrder">
          <h1 className="title">Оформление заказа</h1>
          <div className="group-Product">
            <div className="product">
              <div className="product__top">
                <h2>1. Корзина</h2>
                <div className="clearBasket" onClick={() => clearBasket()}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.3999 3.7998H13.5999L12.4939 13.7538C12.456 14.0964 12.293 14.4129 12.0363 14.6428C11.7795 14.8727 11.447 14.9998 11.1023 14.9998H4.8975C4.55285 14.9998 4.2203 14.8727 3.96353 14.6428C3.70676 14.4129 3.54381 14.0964 3.5059 13.7538L2.3999 3.7998Z"
                      stroke="#A1A1A1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.7413 1.8029C4.85453 1.56278 5.0337 1.3598 5.25791 1.21764C5.48212 1.07548 5.74213 0.999997 6.0076 1H9.992C10.2576 0.999864 10.5178 1.07528 10.7421 1.21745C10.9665 1.35962 11.1457 1.56267 11.259 1.8029L12.1998 3.8H3.7998L4.7413 1.8029Z"
                      stroke="#A1A1A1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1 3.7998H15"
                      stroke="#A1A1A1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.6001 7.2998V10.7998"
                      stroke="#A1A1A1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.3999 7.2998V10.7998"
                      stroke="#A1A1A1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>Очистить корзину</span>
                </div>
              </div>
              {itemsCart.length ? (
                <div className="product__content">
                  {itemsCart.map((obj) => (
                    <FormOrderitem {...obj} />
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="resultPrice">
              <span>Итого:</span>
              <strong className="resultPrice__price">{totalPrice} ₽</strong>
              <div className="buttonPrice">
                <p onClick={() => alert("Да мне в принципе все равно :)")}>
                  У меня есть промокод
                </p>
                <button
                  className="buttonPrice__button"
                  onClick={() => {
                    if (trueValue) {
                      handlePayment();
                      navigate("/Заказы");
                    } else {
                      alert("Хитрюга введи все поля");
                    }
                  }}
                >
                  Оплатить
                </button>
              </div>
            </div>
          </div>
          <div className="group-Product">
            <div className="product">
              <div className="product__top">
                <h2>2. Персональная информация</h2>
              </div>
              <MyForm />
            </div>
          </div>
        </div>
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

export default OrderForm;

