import { makeAutoObservable } from "mobx";

class Theme {
  constructor() {
    makeAutoObservable(this);
    this.theme = this.loadTheme();
  }
  theme = "light";

  // Сохранение темы в localStorage
  saveTheme = () => {
    localStorage.setItem("theme", this.theme);
  };

  // Загрузка темы из localStorage
  loadTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light"; // Возвращаем сохранённую тему или "light" по умолчанию
  };
  SetTheme = () => {
    this.theme = this.theme === "light" ? "black" : "light";
    this.saveTheme();
  };
}

export default new Theme();
