import { memo, useMemo, useState } from "react";
import SousItem from "./SousItem";
import ItemsPizza from "../store/ItemsPizza";
import { observer } from "mobx-react-lite";
type Props = {
  modal: boolean;
  name: string;
  imgUrl: string;
  price: number[];
  description: string;
  setModal: (i: boolean) => void;
};
export interface TSous {
  id: number;
  price: number;
  img: string;
  imgAgree: string;
  name: string;
}
export const arraySous = [
  {
    id: 0,
    name: "Сырный бортик",
    img: "./img/parmizan.svg",
    price: 179,
    imgAgree: "./img/AgreeImg.svg",
  },
  {
    id: 1,
    name: "Сливочная моцарелла",
    img: "./img/parmizan2.svg",
    price: 109,
    imgAgree: "./img/AgreeImg.svg",
  },
  {
    id: 2,
    name: "Сыры чеддер и пармезан",
    img: "./img/parmizan3.svg",
    price: 79,
    imgAgree: "./img/AgreeImg.svg",
  },
];
const ModalPizza = memo(
  observer(({ modal, setModal, name, imgUrl, description, price }: Props) => {
    const listSize = ["Маленькая", "Средняя", "Большая"];
    const { addProduct } = ItemsPizza;
    const [size, setSize] = useState<number>(0);
    const listType = ["Традиционное", "Тонкое"];
    const [type, setType] = useState<number>(0);

    const [arrayParmizan, setArrayParmizan] = useState<Set<number>>(new Set());
    const priceParmizan = useMemo(() => {
      return Array.from(arrayParmizan).reduce((sum, count) => sum + count, 0);
    }, [arrayParmizan]);
    const handleClick = (price: number) => {
      setArrayParmizan((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(price)) newSet.delete(price);
        else newSet.add(price);

        return newSet;
      });
    };
    const priceModal = () => {
      if (size !== 0 || Array.from(arrayParmizan).length)
        return price[size] + priceParmizan;
      return price[0];
    };

    return (
      <div className={`modal-container ${modal ? "active" : ""}`}>
        <div className="modal">
          <svg
            onClick={() => setModal(false)}
            width="18"
            height="18"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.4492 14.9174L29.5992 2.76743C29.8723 2.44859 30.015 2.03847 29.9988 1.61901C29.9826 1.19955 29.8087 0.801647 29.5118 0.504823C29.215 0.207998 28.8171 0.0341104 28.3977 0.0179084C27.9782 0.00170651 27.5681 0.144384 27.2492 0.417428L15.0992 12.5674L2.94924 0.400761C2.6304 0.127717 2.22028 -0.0149589 1.80082 0.00124298C1.38136 0.0174449 0.983459 0.191331 0.686635 0.488156C0.389811 0.78498 0.215923 1.18288 0.199721 1.60234C0.183519 2.0218 0.326196 2.43192 0.59924 2.75076L12.7492 14.9174L0.582573 27.0674C0.408104 27.2168 0.266403 27.4007 0.166364 27.6075C0.0663255 27.8143 0.0101078 28.0395 0.00124197 28.269C-0.00762386 28.4985 0.0310527 28.7274 0.114844 28.9413C0.198635 29.1552 0.325732 29.3494 0.488156 29.5118C0.650581 29.6743 0.844826 29.8014 1.0587 29.8852C1.27258 29.9689 1.50146 30.0076 1.731 29.9988C1.96053 29.9899 2.18575 29.9337 2.39252 29.8336C2.5993 29.7336 2.78316 29.5919 2.93257 29.4174L15.0992 17.2674L27.2492 29.4174C27.5681 29.6905 27.9782 29.8331 28.3977 29.8169C28.8171 29.8007 29.215 29.6269 29.5118 29.33C29.8087 29.0332 29.9826 28.6353 29.9988 28.2158C30.015 27.7964 29.8723 27.3863 29.5992 27.0674L17.4492 14.9174Z"
              fill="black"
            />
          </svg>
          <div className="imgModal">
            <img src={imgUrl} width={250} height={250} alt="" />
          </div>
          <div className="pizzaSorted">
            <div className="top">
              <span className="titleModalCard">{name}</span>
              <p>{description}</p>
            </div>
            <div className="container-size">
              <ul>
                {listSize.map((name, i) => (
                  <li
                    className={i === size ? "active" : ""}
                    onClick={() => setSize(i)}
                  >
                    {name}
                  </li>
                ))}
              </ul>
              <ul className="type">
                {listType.map((name, i) => (
                  <li
                    className={i === type ? "active" : ""}
                    onClick={() => setType(i)}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="containerAdd">
              <div className="choose">
                <h2>Добавить по вкусу</h2>
                <div className="group-choose">
                  {arraySous.map((obj: TSous) => (
                    <div
                      className="parmizan"
                      onClick={() => handleClick(obj.price)}
                    >
                      <SousItem {...obj} key={obj.name} />
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => {
                  const item = {
                    name,
                    price: priceModal(),
                    imgUrl,
                    description:
                      description + `+${listSize[size]}+${listType[type]}`,
                  };
                  addProduct(item);
                  setModal(false);
                }}
              >
                Добавить в корзину за {priceModal()} ₽
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  })
);

export default ModalPizza;
