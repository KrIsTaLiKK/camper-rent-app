import Button from "../../shared/components/Button/Button";
import FeatureList from "../CampersList/FeatureList/FeatureList";
import img from "../../assets/van.jpg";
import css from "./CamperItem.module.css";
import CamperDetails from "../../shared/components/CamperDetails/CamperDetails";
import truncateText from "../../shared/helpers/truncateText";

const description = truncateText(
  "Embrace simplicity and freedom with the Mavericks panel truck, an ideal choice for solo travelers or couples seeking a compact and efficient way to explore the open roads."
);

const CamperItem = () => {
  return (
    <li className={css.item}>
      <div className={css.img_wrap}>
        <img src={img} alt="" className={css.img} />
      </div>

      <div className={css.info_wrap}>
        <CamperDetails />
        <p>{description}</p>
        <FeatureList />
        <Button className={css.btn}>Show more</Button>
      </div>
    </li>
  );
};

export default CamperItem;
