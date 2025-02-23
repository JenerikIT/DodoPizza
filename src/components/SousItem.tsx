import { useState } from "react";
import { TSous } from "./ModalPizza";
import Agree from "../../public/img/AgreeImg.svg";

const SousItem = ({ name, img, price }: TSous) => {
  const [activeSous, setActiveSous] = useState(false);
  return (
    <div
      className={`item ${activeSous ? "active" : ""}`}
      onClick={() => setActiveSous(!activeSous)}
    >
      {activeSous ? (
        <img src={Agree}></img>
      ) : (
        <div className="blockAgree"></div>
      )}
      <img src={img} width={120} height={120} className="iconSous"></img>
      <span>{name}</span>
      <strong className="modalPricePizza">{price} ₽</strong>
    </div>
  );
};

export default SousItem;
