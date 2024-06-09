import { RxHamburgerMenu } from "react-icons/rx";
import css from "./BurgerBtn.module.css";

const BurgerBtn = ({ setIsOpen }) => {
  return (
    <button
      type="button"
      className={css.burger_btn}
      onClick={() => setIsOpen(true)}
    >
      <RxHamburgerMenu size={30} />
    </button>
  );
};

export default BurgerBtn;
