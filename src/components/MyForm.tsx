import { useEffect, useRef, useState } from "react";
import Value from "../store/Value";
import { observer } from "mobx-react-lite";

const MyForm = observer(({}) => {
  const { ValueIsTrue, trueValue } = Value;
  const [formData, setFormData] = useState({
    userName: "",
    serName: "",
    email: "",
    number: "",
  });
  const isTrueForm =
    formData.number &&
    formData.email &&
    formData.serName &&
    formData.userName &&
    formData.email.includes("@")
      ? true
      : false;
  ValueIsTrue(isTrueForm);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <>
      <form action="">
        <div className="group-input">
          <div className="date">
            <label htmlFor="userName">Имя</label>
            <input
              ref={inputRef}
              value={formData.userName}
              onChange={handleChange}
              type="text"
              id="userName"
              placeholder="Ахмед"
              style={{
                border: !formData.userName
                  ? "1px solid red"
                  : "1px solid green",
              }}
            />
          </div>
          <div className="date">
            <label htmlFor="serName">Фамилия</label>
            <input
              type="text"
              value={formData.serName}
              onChange={handleChange}
              id="serName"
              placeholder="Рамазанов"
              style={{
                border: !formData.serName ? "1px solid red" : "1px solid green",
              }}
            />
          </div>
          <div className="date">
            <label htmlFor="email">Email</label>
            <input
              value={formData.email}
              onChange={handleChange}
              type="email"
              id="email"
              placeholder="Jenerik@mail.ru"
              style={{
                border: !formData.email ? "1px solid red" : "1px solid green",
              }}
            />
          </div>
          <div className="date">
            <label htmlFor="number">Телефон</label>
            <input
              value={formData.number}
              onChange={handleChange}
              type="number"
              id="number"
              placeholder="+89886319081"
              style={{
                border: !formData.number ? "1px solid red" : "1px solid green",
              }}
            />
          </div>
        </div>
        {!trueValue ? (
          <p>введите все поля, для успешной авторизации</p>
        ) : (
          <p style={{ color: "green", fontWeight: 500, fontSize: 18 }}>
            красава
          </p>
        )}
      </form>
    </>
  );
});

export default MyForm;
