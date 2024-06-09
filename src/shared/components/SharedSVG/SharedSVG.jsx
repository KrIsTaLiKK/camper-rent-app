import { sprite } from "../../icons/index";

const SharedSVG = ({ svgId, ...props }) => {
  return (
    <svg {...props}>
      <use href={`${sprite}#${svgId}`}></use>
    </svg>
  );
};

export default SharedSVG;
