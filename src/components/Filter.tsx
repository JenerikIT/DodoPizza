import { observer } from "mobx-react-lite";
import Value from "../store/Value";
import ItemFIlter from "./ItemFIlter";
// import { useState } from "react";
import ItemsPizza from "../store/ItemsPizza";

type Props = {};

const Filter = observer(({}: Props) => {
  const { valuePriceMin, valuePriceMax, addValueMax, addValueMin } = Value;
  const arrayFilter = ["Можно собирать"];
  const { changeCollect } = ItemsPizza;
  return (
    <div className="filter">
      <h3>Фильтрация</h3>
      <div className="filter__items">
        {arrayFilter.map((name) => (
          <div onClick={() => changeCollect()}>
            <ItemFIlter name={name} key={name} />
          </div>
        ))}
        <div className="container-filter">
          <div className="priceBy col-item ">
            <h3>Цена от и до:</h3>
            <div className="input-price">
              <input
                type="₽"
                placeholder="0 ₽"
                value={valuePriceMin}
                onChange={(e) => addValueMin(e.target.value)}
              />
              <input
                type="text"
                placeholder="1950 ₽"
                value={valuePriceMax}
                onChange={(e) => addValueMax(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Filter;
