import SharedSVG from "../../shared/components/SharedSVG/SharedSVG";
import css from "./FeatureTag.module.css";

const FeatureTag = () => {
  return (
    <>
      <li className={css.feature_tag}>
        <SharedSVG svgId="users" width="20" height="20" />
        <span className={css.text}>3 adults</span>
      </li>
    </>
  );
};

export default FeatureTag;
