import Value from "../store/Value";
import CardSearch from "./CardSearch";
import { observer } from "mobx-react-lite";
import { TPizza } from "../App";
import { useEffect, useRef } from "react";
import pizzaStore from "../store/FetchPiiza";

type Props = {
  activeSearch: boolean;
  onClickActiveSearch: (value: boolean) => void;
};

const Search = observer(({ activeSearch, onClickActiveSearch }: Props) => {
  const { valueInput, searchvalueInput } = Value;
  const { FetchPizza, itemsPizza } = pizzaStore;
  useEffect(() => {
    FetchPizza();
  }, []);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    inputRef.current?.focus();
  };
  return (
    <>
      <div className="search">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <img src="./img/search.svg" height={18} alt="" />
          <input
            ref={inputRef}
            onClick={() => onClickActiveSearch(true)}
            type="text"
            placeholder="Поиск пиццы..."
            value={valueInput}
            onChange={(e) => {
              searchvalueInput(e.target.value);
            }}
          />
          {activeSearch && (
            <div className="group-Card-search">
              {itemsPizza.map(({ items }: any) =>
                items
                  .filter((item: any) =>
                    item.name
                      .toLocaleLowerCase()
                      .includes(valueInput.toLowerCase())
                  )
                  .map((obj: TPizza) => (
                    <CardSearch
                      key={obj.id}
                      {...obj}
                      onChangeProduct={() => {
                        onClickActiveSearch(false);
                        handleClick();
                      }}
                    />
                  ))
              )}
            </div>
          )}
        </form>
      </div>
      {activeSearch ? (
        <div
          className="fullBack"
          onClick={() => {
            onClickActiveSearch(!activeSearch);
          }}
        ></div>
      ) : (
        ""
      )}
    </>
  );
});

export default Search;
