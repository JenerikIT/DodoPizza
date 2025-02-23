import Category from "../components/Category";
import Filter from "../components/Filter";
import { Home } from "./Home";
import Drawer from "../components/Drawer";
import { memo } from "react";
type TMainPageDrawer = {
  openDrawer: boolean;
  onClickDrawer: (value: boolean) => void;
};
const MainPages = memo(({ openDrawer, onClickDrawer }: TMainPageDrawer) => {
  return (
    <>
      <main className="container-main">
        <Category />
        <div className="main-Home wrap">
          <Filter />
          <Home />
        </div>
      </main>
      <Drawer openDrawer={openDrawer} onClickDrawer={onClickDrawer} />
    </>
  );
});

export default MainPages;
