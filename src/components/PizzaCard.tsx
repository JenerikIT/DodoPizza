import { observer } from "mobx-react-lite";
import { TPizza } from "../App";
import ItemsPizza from "../store/ItemsPizza";
import ButtonProduct from "./ButtonProduct";
import { memo, useCallback, useState } from "react";
import ModalPizza from "./ModalPizza";
import { Link } from "react-router-dom";

const PizzaCard = memo(
  observer(({ name, imgUrl, price, description, collect }: TPizza) => {
    const { addProduct, itemsCart } = ItemsPizza;
    const totalArrayCard = itemsCart.find((obj) => obj.name === name);
    const total = totalArrayCard ? totalArrayCard.count : 0;
    const [modal, setModal] = useState(false);
    const onClickSetModal = useCallback(() => {
      setModal(false);
    }, []);
    return (
      <div className="card">
        <Link to={`/pizza/` + name}>
          <img
            src={imgUrl}
            width={221}
            height={222}
            alt=""
            className="ProductImg"
          />
        </Link>
        <strong>{name}</strong>
        <p>{description}</p>
        <div className="price">
          <span>
            от <strong>{price[0]}</strong>
          </span>
          {total > 0 ? (
            <ButtonProduct name={name} count={total} />
          ) : (
            <button
              onClick={() => {
                if (!collect) {
                  const item = {
                    name,
                    imgUrl,
                    description,
                    collect,
                    price: price[0],
                  };
                  addProduct(item);
                  setModal(false);
                } else {
                  setModal(true);
                }
              }}
              className="plusSvg"
            >
              <img
                src={collect ? "./img/Collect.svg" : "./img/Plus.svg"}
                alt=""
              />
              <span>{collect || total ? "Собрать" : "Добавить"}</span>
            </button>
          )}
        </div>
        <ModalPizza
          modal={modal}
          setModal={onClickSetModal}
          name={name}
          imgUrl={imgUrl}
          description={description}
          price={price}
        />
      </div>
    );
  })
);

export default PizzaCard;
