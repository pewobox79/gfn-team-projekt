import MyButton from "../MyButton";
import type { GridItemProps } from "./types";

const GridItem = ({
  title,
  description,
  icon,
  bgColor,
  bgImage,
  hasBgImage,
  hasButton,
  button,
}: GridItemProps) => {

  const bgColorMap = {
    red: "bg-red-600 text-white",
    white: "bg-white text-slate-900",
    black: "bg-slate-900 text-white",
  };

  const bgClass = bgColor ? bgColorMap[bgColor] : bgColorMap.white;

  const hasBg = hasBgImage && bgImage;

  return (
    <div className="wrapper w-full rounded-xl border border-gray-200 shadow-md">

      <div
        className={`content p-8 ${!hasBg ? bgClass : ""}`}
        style={
          hasBg
            ? {
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "#ffffff",
              }
            : undefined
        }
      >

        {icon && (
          <img
            className="icon mb-4"
            src={icon.src}
            alt={icon.alt ?? ""}
          />
        )}

        <h3 className="title mb-3 text-lg font-semibold">
          {title}
        </h3>

        <p className="description mb-4 text-sm">
          {description}
        </p>

        {hasButton && button && (
          <MyButton {...button} />
        )}

      </div>

    </div>
  );
};

export default GridItem;