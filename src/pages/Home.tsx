import { useEffect } from "react";
import Card from "../components/Card";
import { observer } from "mobx-react-lite";
import pizzaStore from "../store/FetchPiiza";
import { Route, Routes } from "react-router-dom";

export const Home = observer(({}) => {
  const { FetchPizza, itemsPizza, loading } = pizzaStore;
  useEffect(() => {
    FetchPizza();
  }, []);
  return (
    <div className="Product-List">
      {!loading && itemsPizza
        ? itemsPizza.map(({ items, title }, index) => {
            return <Card title={title} items={items} categoryId={index} />;
          })
        : [...new Array(4)].map((obj) => (
            <img src="./img/LoadingCard.svg" key={obj}></img>
          ))}
    </div>
  );
});

// [
//   "title":
//     [
//       {
//         "id": "0",
//         "name": "Пепперони фреш",
//         "imgUrl": "https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif",
//         "description": "Пикантная пепперони , увеличенная порция моцареллы, томаты , фирменный томатный соус",
//         "price": 369,
//         "category": 1,
//         "rating": 3,
//         "title": "Пиццы"
//       },
//       {
//         "id": "1",
//         "name": "Двойной цыпленок",
//         "imgUrl": "https://media.dodostatic.net/image/r:584x584/11ee7d614cbe0530b7234b6d7a6e5f8e.avif",
//         "description": "Цыпленок , моцарелла, фирменный соус альфредо",
//         "price": 489,
//         "category": 4,
//         "rating": 4
//       },
//       {
//         "id": "2",
//         "name": "Песто",
//         "imgUrl": "https://media.dodostatic.net/image/r:584x584/11ee7d613b84a5dbb4c1c50fb9583b7e.avif",
//         "description": "Цыпленок , соус песто, кубики брынзы , томаты , моцарелла, фирменный соус альфредо",
//         "price": 659,
//         "category": 2,
//         "rating": 2
//       },
//       {
//         "id": "3",
//         "name": "Додо ",
//         "imgUrl": "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
//         "description": "Бекон , митболы , пикантная пепперони , моцарелла, томаты , шампиньоны , сладкий перец , красный лук , чеснок , фирменный томатный соус",
//         "price": 898,
//         "category": 4,
//         "rating": 2
//       },
//       {
//         "id": "4",
//         "name": "Маргарита ",
//         "imgUrl": "https://media.dodostatic.net/image/r:584x584/11ee7d6105ef6690b86fbde6150b5b0c.avif",
//         "description": "Увеличенная порция моцареллы, томаты , итальянские травы , фирменный томатный соус",
//         "price": 659,
//         "category": 3,
//         "rating": 3
//       },
//       {
//         "id": "5",
//         "name": "Аррива!",
//         "imgUrl": "https://media.dodostatic.net/image/r:584x584/11ee7d6134bc4150bdd8e792d866ab52.avif",
//         "description": "Цыпленок , острые колбаски чоризо , соус бургер, сладкий перец , красный лук , томаты , моцарелла, соус ранч, чеснок ",
//         "price": 769,
//         "category": 3,
//         "rating": 1
//       }
//     ],
//     [
//       {
//         "id": "0",
//         "name": "Чизкейк",
//         "imgUrl": "https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif",
//         "description": "Пикантная пепперони , увеличенная порция моцареллы, томаты , фирменный томатный соус",
//         "price": 369,
//         "category": 1,
//         "rating": 3,
//         "title": "Новинки"
//       },
//       {
//         "id": "1",
//         "name": "Двойной цыпленок",
//         "imgUrl": "https://media.dodostatic.net/image/r:584x584/11ee7d614cbe0530b7234b6d7a6e5f8e.avif",
//         "description": "Цыпленок , моцарелла, фирменный соус альфредо",
//         "price": 489,
//         "category": 4,
//         "rating": 4
//       },
//       {
//         "id": "2",
//         "name": "Песто",
//         "imgUrl": "https://media.dodostatic.net/image/r:584x584/11ee7d613b84a5dbb4c1c50fb9583b7e.avif",
//         "description": "Цыпленок , соус песто, кубики брынзы , томаты , моцарелла, фирменный соус альфредо",
//         "price": 659,
//         "category": 2,
//         "rating": 2
//       },
//       {
//         "id": "3",
//         "name": "Додо ",
//         "imgUrl": "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
//         "description": "Бекон , митболы , пикантная пепперони , моцарелла, томаты , шампиньоны , сладкий перец , красный лук , чеснок , фирменный томатный соус",
//         "price": 898,
//         "category": 4,
//         "rating": 2
//       },
//       {
//         "id": "4",
//         "name": "Маргарита ",
//         "imgUrl": "https://media.dodostatic.net/image/r:584x584/11ee7d6105ef6690b86fbde6150b5b0c.avif",
//         "description": "Увеличенная порция моцареллы, томаты , итальянские травы , фирменный томатный соус",
//         "price": 659,
//         "category": 3,
//         "rating": 3
//       },
//       {
//         "id": "5",
//         "name": "Аррива!",
//         "imgUrl": "https://media.dodostatic.net/image/r:584x584/11ee7d6134bc4150bdd8e792d866ab52.avif",
//         "description": "Цыпленок , острые колбаски чоризо , соус бургер, сладкий перец , красный лук , томаты , моцарелла, соус ранч, чеснок ",
//         "price": 769,
//         "category": 3,
//         "rating": 1
//       }
//     ],
//     [
//       {
//         "id": "0",
//         "name": "Пепперони фреш",
//         "imgUrl": "https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif",
//         "description": "Пикантная пепперони , увеличенная порция моцареллы, томаты , фирменный томатный соус",
//         "price": 369,
//         "category": 1,
//         "rating": 3,
//         "title": "Комбо"
//       },
//       {
//         "id": "1",
//         "name": "Двойной цыпленок",
//         "imgUrl": "https://media.dodostatic.net/image/r:584x584/11ee7d614cbe0530b7234b6d7a6e5f8e.avif",
//         "description": "Цыпленок , моцарелла, фирменный соус альфредо",
//         "price": 489,
//         "category": 4,
//         "rating": 4
//       },
//       {
//         "id": "2",
//         "name": "Песто",
//         "imgUrl": "https://media.dodostatic.net/image/r:584x584/11ee7d613b84a5dbb4c1c50fb9583b7e.avif",
//         "description": "Цыпленок , соус песто, кубики брынзы , томаты , моцарелла, фирменный соус альфредо",
//         "price": 659,
//         "category": 2,
//         "rating": 2
//       },
//       {
//         "id": "3",
//         "name": "Додо ",
//         "imgUrl": "https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif",
//         "description": "Бекон , митболы , пикантная пепперони , моцарелла, томаты , шампиньоны , сладкий перец , красный лук , чеснок , фирменный томатный соус",
//         "price": 898,
//         "category": 4,
//         "rating": 2
//       },
//       {
//         "id": "4",
//         "name": "Маргарита ",
//         "imgUrl": "https://media.dodostatic.net/image/r:584x584/11ee7d6105ef6690b86fbde6150b5b0c.avif",
//         "description": "Увеличенная порция моцареллы, томаты , итальянские травы , фирменный томатный соус",
//         "price": 659,
//         "category": 3,
//         "rating": 3
//       },
//       {
//         "id": "5",
//         "name": "Аррива!",
//         "imgUrl": "https://media.dodostatic.net/image/r:584x584/11ee7d6134bc4150bdd8e792d866ab52.avif",
//         "description": "Цыпленок , острые колбаски чоризо , соус бургер, сладкий перец , красный лук , томаты , моцарелла, соус ранч, чеснок ",
//         "price": 769,
//         "category": 3,
//         "rating": 1
//       }
//     ]
//   ]

//PIZZA V!
// [
//   {
//     id: "0",
//     name: "Чизбургер-пицца",
//     imgUrl: "/img/Chisburger.svg",
//     types: [1, 0],
//     size: [26, 30, 40],
//     price: 395,
//     category: 1,
//   },
//   {
//     id: "1",
//     name: "Сырная",
//     imgUrl: "/img/Chees.svg",
//     types: [0, 1],
//     size: [26, 40],
//     price: 450,
//     category: 2,
//   },
//   {
//     id: "2",
//     name: "Креветки по-азиатски",
//     imgUrl: "/img/Krevetka.svg",
//     types: [0],
//     size: [26, 30],
//     price: 290,
//     category: 4,
//   },
//   {
//     id: "3",
//     name: "Сырный цыпленок",
//     imgUrl: "/img/chekeen.svg",
//     types: [1],
//     size: [26, 30, 40],
//     price: 385,
//     category: 3,
//   },
// ];
