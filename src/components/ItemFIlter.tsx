import { useState } from "react";

type Props = {
  name: string;
};

const ItemFIlter = ({ name }: Props) => {
  const [activeIconFilter, setActiveIconFilter] = useState(false);
  return (
    <div className="filter__items">
      <div className="item">
        {activeIconFilter ? (
          <img
            src="./img/filterIcon.svg"
            alt=""
            className="iconFilter"
            onClick={() => setActiveIconFilter(!activeIconFilter)}
          />
        ) : (
          <div
            className="defaultIcon"
            onClick={() => setActiveIconFilter(!activeIconFilter)}
          ></div>
        )}

        <span>{name}</span>
      </div>
    </div>
  );
};
export default ItemFIlter;
