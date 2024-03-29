import  { FC } from "react";
import { puzzlePieceSvgProps } from "./svgTypes";

const TabVideoIcon: FC<puzzlePieceSvgProps> = ({ color }) => {
  return (
    <svg
      className={`fill-current ${color}`}
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 2C16 0.897 15.103 0 14 0H2C0.897 0 0 0.897 0 2V12C0 13.103 0.897 14 2 14H14C15.103 14 16 13.103 16 12V8.667L20 12V2L16 5.333V2Z" />
    </svg>
  );
};

export default TabVideoIcon;
