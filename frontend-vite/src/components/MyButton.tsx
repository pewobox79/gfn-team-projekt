import type { MyButtonProps } from "@/types/types";
import { getBgColor } from "@/utils/bgColor";
import { Link } from "react-router-dom";

const MyButton = ({
  label,
  link,
  bgColor = "red",
  hasBorderRadius,
}: MyButtonProps) => {
  const radius = hasBorderRadius ? "rounded-lg" : "rounded-none";
  
  console.log("color generator", getBgColor(bgColor))
  const baseStyles =
    "px-8 py-3 font-bold uppercase inline-block";
  return (
    <Link to={link as string} className={`${baseStyles} ${getBgColor(bgColor)} ${radius} z-1`}>
      {label}
    </Link>
  );
};

export default MyButton;