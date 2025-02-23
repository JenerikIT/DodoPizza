import { observer } from "mobx-react-lite";
import { TPizza } from "../App";
import { useIntersection } from "react-use";
import React from "react";
import CategoryStore from "../store/CategoryStore";
import Value from "../store/Value";
import PizzaCard from "./PizzaCard";
import ItemsPizza from "../store/ItemsPizza";
type TCard = {
  items: TPizza[];
  title: string;
  categoryId: number;
};
const Card = React.memo(
  observer(({ items, title, categoryId }: TCard) => {
    const { collectFilter } = ItemsPizza;
    const { valuePriceMin, valuePriceMax, valueInput } = Value;
    const intersectionRef = React.useRef(null);
    const { setActiveCategoryID } = CategoryStore;
    const intersection = useIntersection(intersectionRef, { threshold: 0.4 });
    React.useEffect(() => {
      if (intersection?.isIntersecting) {
        setActiveCategoryID(categoryId);
        if (intersection?.target.id !== "Пиццы") {
          document.querySelector(".imgDodo")?.classList.add("active");
          document.querySelector(".categoryDodo")?.classList.add("active");

          document.querySelector(".category")?.classList.add("active");
        } else {
          document.querySelector(".category")?.classList.remove("active");
          document.querySelector(".imgDodo")?.classList.remove("active");
          document.querySelector(".categoryDodo")?.classList.remove("active");
        }
      }
    }, [intersection?.isIntersecting, setActiveCategoryID, categoryId]);

    const filteredItems = items.filter((obj: TPizza) => {
      const nameMatches = valueInput.length
        ? obj.name.toLocaleLowerCase().includes(valueInput.toLocaleLowerCase())
        : true;

      const priceMatches =
        (!valuePriceMin.length || obj.price[0] >= +valuePriceMin) &&
        (!valuePriceMax.length || obj.price[0] <= +valuePriceMax);

      const collectMatches = collectFilter ? obj.collect : true;

      return nameMatches && priceMatches && collectMatches;
    });
    return (
      <div className="Product" id={title} ref={intersectionRef}>
        <>
          {filteredItems.length ? (
            <>
              <h1>{title}</h1>
              <div className="group-card">
                {filteredItems.map((obj: TPizza) => (
                  <PizzaCard key={obj.id} {...obj} />
                ))}
              </div>
            </>
          ) : (
            <div className="Empty Empty__Home">
              <img
                src="https://cdn.dodostatic.com/site-static/dist/assets/5aa5dac99a832c62f3ef..svg"
                alt="пусто"
                width={300}
                height={300}
              />
              <strong>{title} пусты</strong>
            </div>
          )}
        </>
      </div>
    );
  })
);

export default Card;
