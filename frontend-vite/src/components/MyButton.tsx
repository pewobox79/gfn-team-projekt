import { Link } from "react-router-dom";

export interface MyButtonProps {
  label: string;
  link: string;
  bgColor?: 'white' | 'red' | 'black';
  hasBorderRadius: boolean;
}

const MyButton = ({
  label,
  link,
  bgColor = "red",
  hasBorderRadius,
}: MyButtonProps) => {
  const radius = hasBorderRadius ? "rounded-lg" : "rounded-none";
  const getBgColor = (color: string) => {

    console.log("color", color)
    if (color == "red") {
      return `bg-${color}-600 text-white hover:text-black`
    }

    if (color == "white") {
      return `bg-${color} border border-black text-red-600 hover:text-black`
    }

    return `bg-${color} text-white hover:text-red-600`
  }

  console.log("color generator", getBgColor(bgColor))
  const baseStyles =
    "px-8 py-3 font-bold uppercase inline-block";
  return (
    <Link to={link} className={`${baseStyles} ${getBgColor(bgColor)} ${radius}`}>
      {label}
    </Link>
  );
};

export default MyButton;
