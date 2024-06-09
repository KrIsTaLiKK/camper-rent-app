import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const buildListClass = (className) => clsx(css.nav_list, className);

const buildLinkClass = (className) => clsx(css.nav_link, className);

const Navigation = ({ onClick, listClassName, linkClassName }) => {
  const linkProps = onClick ? { onClick } : {};

  return (
    <nav>
      <ul className={buildListClass(listClassName)}>
        <li>
          <NavLink
            to="/"
            className={buildLinkClass(linkClassName)}
            {...linkProps}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/catalog"
            className={buildLinkClass(linkClassName)}
            {...linkProps}
          >
            Catalog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorite"
            className={buildLinkClass(linkClassName)}
            {...linkProps}
          >
            Favorite
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
