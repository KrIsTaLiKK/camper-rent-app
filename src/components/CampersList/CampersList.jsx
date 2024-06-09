import CamperItem from "../CamperItem/CamperItem";
import css from "./CampersList.module.css";

const CampersList = () => {
  return (
    <section>
      <ul className={css.wrap}>
        <CamperItem />
      </ul>
    </section>
  );
};

export default CampersList;
