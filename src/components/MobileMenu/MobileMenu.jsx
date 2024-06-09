import CloseBtn from "../../shared/components/CloseBtn/CloseBtn";
import Container from "../../shared/components/Container/Container";
import Navigation from "../../shared/components/Navigation/Navigation";
import css from "./MobileMenu.module.css";

const MobileMenu = ({ setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={css.mob_menu}>
      <Container className={css.mob_menu_wrap}>
        <CloseBtn className={css.close_btn} onClick={handleClick} />
        <Navigation onClick={handleClick} />
      </Container>
    </div>
  );
};

export default MobileMenu;
