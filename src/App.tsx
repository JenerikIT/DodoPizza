import "./App.scss";
import "./media.scss";
import "./reset.scss";
import Header from "./components/Header";
import { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Routes, Route } from "react-router-dom";
import MainPages from "./pages/MainPages";
import Order from "./pages/Order";
import OrderForm from "./pages/OrderForm";
import CardMore from "./pages/CardMore";
import Theme from "./store/Theme";
import axios from "axios";
export type TPizza = {
  id?: number;
  name: string;
  description: string;
  price?: number[] | any;
  category?: number;
  imgUrl: string;
  count?: number | any;
  collect?: boolean;
};

export const App = observer(() => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const onClickDrawer = useCallback((i: boolean) => {
    setOpenDrawer(i);
  }, []);
  const { theme } = Theme;
  // При изменении темы обновляем атрибут data-theme у корневого элемента
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  
  return (
    <div className="wrapper">
      <Header
        setOpenDrawer={() => setOpenDrawer(true)}
        openDrawer={openDrawer}
      />
      <Routes>
        <Route
          path={"/"}
          element={
            <MainPages openDrawer={openDrawer} onClickDrawer={onClickDrawer} />
          }
        />
        <Route path="/pizza/:name" element={<CardMore />} />

        <Route path="/Заказы" element={<Order />} />
        <Route path="/Оформление" element={<OrderForm />} />
      </Routes>
    </div>
  );
});

export default App;
