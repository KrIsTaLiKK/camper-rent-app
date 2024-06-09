import { useState } from "react";
import BurgerBtn from "../../shared/components/BurgerBtn/BurgerBtn";
import Logo from "../../shared/components/Logo/Logo";
import MobileMenu from "../MobileMenu/MobileMenu";

import css from "./NavBar.module.css";
import Navigation from "../../shared/components/Navigation/Navigation";
import useMediaQuery from "../../hooks/useMediaQuery";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isTablet = useMediaQuery("(min-width: 768px)");

  return (
    <div className={css.wrap}>
      <Logo />
      {isTablet && (
        <Navigation listClassName={css.nav_list} linkClassName={css.nav_link} />
      )}
      <BurgerBtn setIsOpen={setIsOpen} />
      {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
    </div>
  );
};

export default NavBar;
