import clsx from "clsx";
import s from "./Button.module.css";

const buildBtnClass = (className) => clsx(s.button, className);

const Button = ({ children, className, ...props }) => {
  return (
    <button className={buildBtnClass(className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
