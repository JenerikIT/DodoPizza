import { useCallback, useRef, useState } from "react";
import { observer } from "mobx-react-lite";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Search from "./Search";
import Logo from "../../public/img/Logo.svg";
import ModalLogin from "./ModalLogin";
import Theme from "../store/Theme";
type Props = {
  setOpenDrawer: (i: boolean) => void;
  openDrawer: boolean;
};
function generatePassword() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}
const Header = observer(({ setOpenDrawer }: Props) => {
  const navigate = useNavigate();
  const [activeSearch, setActiveSearch] = useState(false);
  const onClickActiveSearch = useCallback((i: boolean) => {
    setActiveSearch(i);
  }, []);
  const { pathname } = useLocation();
  const [valueNumber, setValuePassword] = useState<string>("");
  const onClickValueNumber = useCallback((e: any) => {
    setValuePassword(e.target.value);
  }, []);
  const [onMove, SetOnMove] = useState(false);
  const arrayChandeEnter = ["Главная", "Заказы"];
  const [onSlectChange, setOnSelectChange] = useState(0);
  const [ModalLoginBefore, SetModalLogin] = useState(false);
  const onClickModalLogin = useCallback((i: boolean) => {
    SetModalLogin(i);
  }, []);
  const { SetTheme, theme } = Theme;

  const password = useRef<string>(generatePassword());
  return (
    <header>
      <div className="container-header wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logoItem" />
          </Link>
          <div className="title">
            <h1>AHMA PIZZA</h1>
            <p>вкусней уже некуда</p>
          </div>
        </div>
        {pathname === "/" ? (
          <Search
            activeSearch={activeSearch}
            onClickActiveSearch={onClickActiveSearch}
          />
        ) : (
          ""
        )}
        <></>
        <div className="containerRight">
          {theme === "light" ? (
            <svg
              onClick={SetTheme}
              width="29"
              height="29"
              viewBox="0 0 20 21"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0098 15.065C8.68368 15.065 7.41191 14.5382 6.47423 13.6005C5.53655 12.6629 5.00977 11.3911 5.00977 10.065C5.00977 8.73892 5.53655 7.46715 6.47423 6.52947C7.41191 5.59179 8.68368 5.065 10.0098 5.065C11.3358 5.065 12.6076 5.59179 13.5453 6.52947C14.483 7.46715 15.0098 8.73892 15.0098 10.065C15.0098 11.3911 14.483 12.6629 13.5453 13.6005C12.6076 14.5382 11.3358 15.065 10.0098 15.065ZM10.0098 0.0650024C10.275 0.0650024 10.5293 0.170359 10.7169 0.357896C10.9044 0.545432 11.0098 0.799786 11.0098 1.065V3.065C11.0098 3.33022 10.9044 3.58457 10.7169 3.77211C10.5293 3.95965 10.275 4.065 10.0098 4.065C9.74455 4.065 9.4902 3.95965 9.30266 3.77211C9.11512 3.58457 9.00977 3.33022 9.00977 3.065V1.065C9.00977 0.799786 9.11512 0.545432 9.30266 0.357896C9.4902 0.170359 9.74455 0.0650024 10.0098 0.0650024V0.0650024ZM10.0098 16.065C10.275 16.065 10.5293 16.1704 10.7169 16.3579C10.9044 16.5454 11.0098 16.7998 11.0098 17.065V19.065C11.0098 19.3302 10.9044 19.5846 10.7169 19.7721C10.5293 19.9596 10.275 20.065 10.0098 20.065C9.74455 20.065 9.4902 19.9596 9.30266 19.7721C9.11512 19.5846 9.00977 19.3302 9.00977 19.065V17.065C9.00977 16.7998 9.11512 16.5454 9.30266 16.3579C9.4902 16.1704 9.74455 16.065 10.0098 16.065V16.065ZM1.00977 9.065H3.00977C3.27498 9.065 3.52934 9.17036 3.71687 9.3579C3.90441 9.54543 4.00977 9.79979 4.00977 10.065C4.00977 10.3302 3.90441 10.5846 3.71687 10.7721C3.52934 10.9596 3.27498 11.065 3.00977 11.065H1.00977C0.744549 11.065 0.490195 10.9596 0.302659 10.7721C0.115122 10.5846 0.00976563 10.3302 0.00976562 10.065C0.00976563 9.79979 0.115122 9.54543 0.302659 9.3579C0.490195 9.17036 0.744549 9.065 1.00977 9.065V9.065ZM17.0098 9.065H19.0098C19.275 9.065 19.5293 9.17036 19.7169 9.3579C19.9044 9.54543 20.0098 9.79979 20.0098 10.065C20.0098 10.3302 19.9044 10.5846 19.7169 10.7721C19.5293 10.9596 19.275 11.065 19.0098 11.065H17.0098C16.7445 11.065 16.4902 10.9596 16.3027 10.7721C16.1151 10.5846 16.0098 10.3302 16.0098 10.065C16.0098 9.79979 16.1151 9.54543 16.3027 9.3579C16.4902 9.17036 16.7445 9.065 17.0098 9.065ZM17.0808 2.994C17.2682 3.18153 17.3736 3.43584 17.3736 3.701C17.3736 3.96617 17.2682 4.22047 17.0808 4.408L15.6668 5.822C15.5745 5.91751 15.4642 5.99369 15.3422 6.0461C15.2202 6.09851 15.0889 6.1261 14.9562 6.12725C14.8234 6.12841 14.6917 6.1031 14.5688 6.05282C14.4459 6.00254 14.3343 5.92829 14.2404 5.8344C14.1465 5.7405 14.0722 5.62885 14.0219 5.50596C13.9717 5.38306 13.9464 5.25138 13.9475 5.1186C13.9487 4.98582 13.9763 4.8546 14.0287 4.7326C14.0811 4.61059 14.1573 4.50025 14.2528 4.408L15.6668 2.994C15.8543 2.80653 16.1086 2.70122 16.3738 2.70122C16.6389 2.70122 16.8932 2.80653 17.0808 2.994ZM5.76677 14.308C5.95424 14.4955 6.05955 14.7498 6.05955 15.015C6.05955 15.2802 5.95424 15.5345 5.76677 15.722L4.35277 17.136C4.26052 17.2315 4.15017 17.3077 4.02817 17.3601C3.90617 17.4125 3.77495 17.4401 3.64217 17.4413C3.50939 17.4424 3.37771 17.4171 3.25481 17.3668C3.13192 17.3165 3.02026 17.2423 2.92637 17.1484C2.83248 17.0545 2.75822 16.9429 2.70794 16.82C2.65766 16.6971 2.63236 16.5654 2.63352 16.4326C2.63467 16.2998 2.66226 16.1686 2.71466 16.0466C2.76707 15.9246 2.84326 15.8142 2.93877 15.722L4.35277 14.308C4.54029 14.1205 4.7946 14.0152 5.05977 14.0152C5.32493 14.0152 5.57924 14.1205 5.76677 14.308V14.308ZM4.35277 2.994L5.76677 4.408C5.94892 4.5966 6.04972 4.84921 6.04744 5.1114C6.04516 5.3736 5.93999 5.62441 5.75458 5.80982C5.56918 5.99523 5.31836 6.1004 5.05617 6.10268C4.79397 6.10495 4.54137 6.00416 4.35277 5.822L2.93977 4.408C2.75761 4.2194 2.65681 3.9668 2.65909 3.7046C2.66137 3.4424 2.76654 3.19159 2.95195 3.00618C3.13736 2.82078 3.38817 2.71561 3.65036 2.71333C3.91256 2.71105 4.16516 2.81184 4.35377 2.994H4.35277ZM15.6668 14.308L17.0808 15.722C17.2629 15.9106 17.3637 16.1632 17.3614 16.4254C17.3592 16.6876 17.254 16.9384 17.0686 17.1238C16.8832 17.3092 16.6324 17.4144 16.3702 17.4167C16.108 17.419 15.8554 17.3182 15.6668 17.136L14.2528 15.722C14.1573 15.6298 14.0811 15.5194 14.0287 15.3974C13.9763 15.2754 13.9487 15.1442 13.9475 15.0114C13.9464 14.8786 13.9717 14.7469 14.0219 14.624C14.0722 14.5012 14.1465 14.3895 14.2404 14.2956C14.3343 14.2017 14.4459 14.1275 14.5688 14.0772C14.6917 14.0269 14.8234 14.0016 14.9562 14.0028C15.0889 14.0039 15.2202 14.0315 15.3422 14.0839C15.4642 14.1363 15.5745 14.2125 15.6668 14.308V14.308Z"
                fill="#FFE100"
              />
            </svg>
          ) : (
            <svg
              className="themIcon"
              onClick={SetTheme}
              width="18"
              height="29"
              viewBox="0 0 16 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.2628 0.335C11.1639 1.28612 10.2836 2.46347 9.68214 3.78644C9.08064 5.1094 8.77214 6.54673 8.77777 8C8.77777 12.632 11.8458 16.528 16.0098 17.665C14.2726 19.1708 12.0507 19.9999 9.75177 20C4.37177 20 0.00976562 15.523 0.00976562 10C0.00976562 4.477 4.37177 0 9.75177 0C10.6198 0 11.4618 0.117 12.2628 0.335Z"
                fill="white"
              />
            </svg>
          )}

          {password.current !== valueNumber && (
            <div
              className="user button user-login"
              onClick={() => SetModalLogin(true)}
            >
              <svg
                onMouseOver={() => SetOnMove(true)}
                width="13"
                height="15"
                viewBox="0 0 13 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5706 14.2087V12.8198C11.5706 12.0831 11.2921 11.3765 10.7966 10.8556C10.301 10.3347 9.6288 10.042 8.92793 10.042H3.64264C2.94177 10.042 2.2696 10.3347 1.77401 10.8556C1.27842 11.3765 1 12.0831 1 12.8198V14.2087"
                  stroke="#FE5F00"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.28522 7.26405C7.74471 7.26405 8.92787 6.0204 8.92787 4.48627C8.92787 2.95215 7.74471 1.7085 6.28522 1.7085C4.82573 1.7085 3.64258 2.95215 3.64258 4.48627C3.64258 6.0204 4.82573 7.26405 6.28522 7.26405Z"
                  stroke="#FE5F00"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Войти</p>
            </div>
          )}
          <ModalLogin
            valueNumber={valueNumber}
            setValuePassword={onClickValueNumber}
            SetModalLogin={onClickModalLogin}
            password={password.current}
            ModalLoginBefore={ModalLoginBefore}
          />
          <div className="user button">
            <p
              onMouseOver={() => SetOnMove(true)}
              onClick={() =>
                navigate(
                  arrayChandeEnter[onSlectChange] !== "Главная"
                    ? `/${arrayChandeEnter[onSlectChange]}`
                    : "/"
                )
              }
            >
              {arrayChandeEnter[onSlectChange]}
            </p>
            <div className={`changeEnter ${onMove ? "active" : ""}`}>
              <ul>
                {arrayChandeEnter.map((name, index) =>
                  name !== arrayChandeEnter[onSlectChange] ? (
                    <Link
                      to={`${name !== "Главная" ? name : "/"}`}
                      key={index}
                      onClick={() => {
                        setOnSelectChange(index);
                        SetOnMove(false);
                        if (name === "Войти") {
                          SetModalLogin(true);
                        }
                      }}
                    >
                      {name}
                    </Link>
                  ) : (
                    ""
                  )
                )}
              </ul>
            </div>
          </div>

          {pathname === "/" ? (
            <svg
              onClick={() => setOpenDrawer(true)}
              width="18"
              height="18"
              className="button"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.33333 16.3332C7.06971 16.3332 7.66667 15.7362 7.66667 14.9998C7.66667 14.2635 7.06971 13.6665 6.33333 13.6665C5.59695 13.6665 5 14.2635 5 14.9998C5 15.7362 5.59695 16.3332 6.33333 16.3332Z"
                stroke="#FE5F00"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.3333 16.3332C15.0697 16.3332 15.6667 15.7362 15.6667 14.9998C15.6667 14.2635 15.0697 13.6665 14.3333 13.6665C13.597 13.6665 13 14.2635 13 14.9998C13 15.7362 13.597 16.3332 14.3333 16.3332Z"
                stroke="#FE5F00"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.77984 4.99984H16.3332L15.2132 10.5932C15.1522 10.9001 14.9852 11.1758 14.7415 11.372C14.4977 11.5683 14.1927 11.6725 13.8798 11.6665H6.83317C6.50763 11.6693 6.19232 11.5528 5.94671 11.3391C5.70109 11.1255 5.54215 10.8293 5.49984 10.5065L4.4865 2.8265C4.44448 2.50599 4.28745 2.21167 4.04464 1.99828C3.80182 1.7849 3.48976 1.66699 3.1665 1.6665H1.6665"
                stroke="#FE5F00"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="border"></div>
    </header>
  );
});
export default Header;
