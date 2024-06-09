import { Link } from "react-router-dom";
import SharedSVG from "../SharedSVG/SharedSVG";
import { FcGlobe } from "react-icons/fc";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      <Link to="/" className={css.link}>
        <FcGlobe size={30} className={css.icon_globe} />
        <SharedSVG
          svgId={"pin"}
          width={10}
          height={15}
          className={css.icon_pin}
        />
        CamperTrip
      </Link>
    </div>
  );
};

export default Logo;
