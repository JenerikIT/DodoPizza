import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import pizzaStore from "../store/FetchPiiza";
import { TPizza } from "../App";
import ItemsPizza from "../store/ItemsPizza";
const CardMore = observer(({}) => {
  const { FetchPizza, itemsPizza } = pizzaStore;
  const { addProduct } = ItemsPizza;
  const navigate = useNavigate();
  const nameParams = useParams();
  useEffect(() => {
    FetchPizza();
  }, [FetchPizza]);
  return (
    <div className="wrap">
      {itemsPizza?.map(({ items }: any) =>
        items
          .filter((obj: TPizza) => obj.name === nameParams.name)
          .map(({ name, imgUrl, price, description }: TPizza) => (
            <div className={`cardMore`} key={name}>
              <div className="cardMore__main">
                <img src={imgUrl} width={250} height={250} alt="" />
                <div className="content">
                  <div className="top">
                    <span className="titleModalCard">{name}</span>
                    <p>{description}</p>
                  </div>
                  <button
                    className="button"
                    onClick={() => {
                      const item = {
                        price: price[0],
                        imgUrl,
                        description,
                        name,
                      };
                      addProduct(item);
                      navigate("/");
                    }}
                  >
                    Добавить за <strong>{price[0]} ₽</strong>
                  </button>
                </div>
              </div>
            </div>
          ))
      )}
    </div>
  );
});

export default CardMore;
