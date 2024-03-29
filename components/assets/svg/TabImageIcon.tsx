import  { FC } from "react";
import { puzzlePieceSvgProps } from "./svgTypes";

const TabImageIcon: FC<puzzlePieceSvgProps> = ({ color }) => {
  return (
    <svg
      className={`fill-current ${color}`}
      width="21"
      height="16"
      viewBox="0 0 21 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.2617 0H2.26172C1.15872 0 0.261719 0.897 0.261719 2V14C0.261719 15.103 1.15872 16 2.26172 16H18.2617C19.3647 16 20.2617 15.103 20.2617 14V2C20.2617 0.897 19.3647 0 18.2617 0ZM4.76172 3C5.15954 3 5.54107 3.15804 5.82238 3.43934C6.10368 3.72064 6.26172 4.10218 6.26172 4.5C6.26172 4.89782 6.10368 5.27936 5.82238 5.56066C5.54107 5.84196 5.15954 6 4.76172 6C4.36389 6 3.98236 5.84196 3.70106 5.56066C3.41975 5.27936 3.26172 4.89782 3.26172 4.5C3.26172 4.10218 3.41975 3.72064 3.70106 3.43934C3.98236 3.15804 4.36389 3 4.76172 3ZM10.2617 13H3.26172L7.26172 8L8.76172 10L11.7617 6L17.2617 13H10.2617Z" />
    </svg>
  );
};

export default TabImageIcon;
