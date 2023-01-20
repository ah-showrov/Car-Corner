import { useState } from "react";
import "./Navigation.css";
import { BiLogOut } from "react-icons/bi";
import { FiLogIn } from "react-icons/fi";
import { BsHandbag, BsHeart, BsSearch } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(true);
  console.log('out' + isOpen)
  const handleMenu = () => {
    console.log('before' + isOpen)
    setIsOpen(!isOpen);
    console.log("after" + isOpen);
    
  };
  console.log('out b' + isOpen)
  return (
    <header className="navbar__main__container">
      <div className="navbar__container">
        <div className="navbar__inner__container">
          <RxHamburgerMenu className="menu__icon hambarger__icon " onClick={handleMenu} />

          <h3 className="navbar__logo__name">SPEEDUP</h3>
          <div className="navbar__search__container">
            <input className="navbar__search__field" type="search" />
            <button className="navbar__search__button">
              <BsSearch />
            </button>
          </div>
          <div className="navbar__icons__container">
            <span className="navbar__icon ">
              <FiLogIn />
            </span>
            <span className="navbar__icon ">
              <BsHeart />
              <span className="navbar__count">10</span>
            </span>
            <span className="navbar__icon ">
              <BsHandbag />
              <span className="navbar__count">10</span>
            </span>
          </div>
        </div>
      </div>
      <div
        className={
          isOpen ? "menu__container open__menu__container" : "menu__container "
        }
        onClick={handleMenu}
      >
        <ul
          className={
            isOpen
              ? "menu__links__container open__menu__links__container"
              : "menu__links__container "
          }
        >
          <RxCross1
            className="menu__icon menu__cross__icon"
            onClick={handleMenu}
          />

          <li className="menu__link "> HOME</li>
          <li className="menu__link "> SHOP</li>
          <li className="menu__link "> PRODUCT</li>
          <li className="menu__link "> SHOP DEAL</li>
          <li className="menu__link "> PAGES</li>
          <li className="menu__link "> BLOG</li>
       { isLogged?  <li className="menu__link login__button " > LOGIN  <FiLogIn style={{fontSize:'23px',marginLeft:'5px'}} /> </li> :
          <li className="menu__link  logout__button" > LOGOUT  <BiLogOut style={{fontSize:'23px',marginLeft:'5px'}} /> </li>}
        </ul>
        <p className="menu__hotline__number">
          <BsTelephone style={{ marginRight: "5px", fontSize: "20px" }} />{" "}
          HOTLINE: +0 (800) 123-456
        </p>
      </div>
    </header>
  );
};
export default Navigation;
