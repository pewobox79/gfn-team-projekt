import { Link } from "react-router-dom";

interface MyButtonProps {
  label: string;
  link: string;
  bgColor?: string;
  hasBorderRadius: boolean;
}

const MyButton = ({
  label,
  link,
  bgColor = "bg-red-600",
  hasBorderRadius,
}: MyButtonProps) => {
  const radius = hasBorderRadius ? "rounded-lg" : "rounded-none";

  const baseStyles =
    "text-white px-8 py-3 font-bold uppercase inline-block";

  return (
    <Link to={link} className={`${baseStyles} ${bgColor} ${radius}`}>
      {label}
    </Link>
  );
};

export default MyButton;