import SharedSVG from "../SharedSVG/SharedSVG";
import css from "./CamperDetails.module.css";

const CamperDetails = () => {
  return (
    <div className={css.wrap}>
      <div className={css.info_wrap}>
        <p className={css.main_text}>Mavericks</p>
        <div className={css.reviews_location_wrap}>
          <div className={css.reviews_wrap}>
            <SharedSVG
              svgId="star"
              width="16"
              height="16"
              className={css.icon_star}
            />
            <p className={css.reviews_text}>4.4(2 Reviews)</p>
          </div>

          <div className={css.location_wrap}>
            <SharedSVG svgId="map-pin" width="16" height="16" />
            <p>Kyiv, Ukraine</p>
          </div>
        </div>
      </div>
      <div className={css.price_wrap}>
        <p className={css.main_text}>€8000.00</p>
        <SharedSVG
          svgId="heart"
          width="24"
          height="24"
          className={css.icon_heart}
        />
      </div>
    </div>
  );
};

export default CamperDetails;
