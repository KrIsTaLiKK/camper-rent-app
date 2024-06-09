import clsx from "clsx";
import css from "./Section.module.css";

const buildSectionClass = (className) => clsx(css.section, className);

const Section = ({ className, children }) => {
  return <section className={buildSectionClass(className)}>{children}</section>;
};
export default Section;
