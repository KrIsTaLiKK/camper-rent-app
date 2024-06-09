import SharedSVG from "../SharedSVG/SharedSVG";
import clsx from "clsx";
import css from "./CloseBtn.module.css";

const buildBtnClass = (className) => clsx(css.close_btn, className);

const CloseBtn = ({ className, ...props }) => {
  return (
    <button type="button" className={buildBtnClass(className)} {...props}>
      <SharedSVG
        svgId={"close"}
        width="30"
        height="30"
        className={css.close_icon}
      />
    </button>
  );
};

export default CloseBtn;
