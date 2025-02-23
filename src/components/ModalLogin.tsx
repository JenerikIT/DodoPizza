import { memo } from "react";

type Props = {
  setValuePassword: (e: string) => void;
  valueNumber: string;
  password: string;
  SetModalLogin: (e: boolean) => void;
  ModalLoginBefore: boolean;
};

const ModalLogin = memo(
  ({
    setValuePassword,
    valueNumber,
    password,
    SetModalLogin,
    ModalLoginBefore,
  }: Props) => {
    return (
      <div className={ModalLoginBefore ? "ModalLogin active" : "ModalLogin"}>
        <div className="modal-containerForm active">
          <div className="top-modal">
            <div className="title">
              <h1>Вход в аккаунт</h1>
              <p>Введите номер телефона, чтобы войти или зарегистрироваться</p>
            </div>
            <img src="./img/ImgLoginFone.svg" width={60} height={60} alt="" />
          </div>
          <div className="inputLogin">
            <input
              type="text"
              placeholder="введите пароль"
              value={valueNumber}
              onChange={(e) => setValuePassword(e.target.value)}
            />
            {valueNumber === password ? (
              <img src="./img/AgreeImg.svg" alt="" />
            ) : (
              ""
            )}
          </div>
          {valueNumber.length && valueNumber === password ? (
            <strong className="success" onClick={() => SetModalLogin(false)}>
              Авторизация прошла успешно
            </strong>
          ) : (
            <>
              <button
                className="button"
                onClick={() => alert(`ваш пароль: ${password}`)}
              >
                Получить код в SMS
              </button>
            </>
          )}
        </div>
      </div>
    );
  }
);

export default ModalLogin;
