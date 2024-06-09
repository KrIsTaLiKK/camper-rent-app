import clsx from "clsx";
import css from "./Container.module.css";

const buildContainerClass = (className) => clsx(css.container, className);

const Container = ({ className, children }) => {
  return <div className={buildContainerClass(className)}>{children}</div>;
};

export default Container;
