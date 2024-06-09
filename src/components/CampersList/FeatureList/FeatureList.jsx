import FeatureTag from "../../FeatureTag/FeatureTag";
import css from "./FeatureList.module.css";

const FeatureList = () => {
  return (
    <ul className={css.feature_list}>
      <FeatureTag />
    </ul>
  );
};

export default FeatureList;
