import getOptimizedImage from "@/utils/formatter";
import HeadingElement from "../HeadingElement";
import GridItem from "./GridItem";
import type { GridElementProps } from "./types";

const GridElement = ({
    title,
    subTitle,
    hasBgImage,
    bgColor,
    image,
    items,
}: GridElementProps) => {
    const cards = items?.map((item, index) => {
        return <GridItem key={index} {...item} />;
    });

    const bgColorMap = {
        red: "bg-red-600",
        white: "bg-white",
        black: "bg-slate-900",
    };

    const bgClass = bgColor ? bgColorMap[bgColor] : bgColorMap.white;
    return (
        <div
            className={`wrapper relative py-12 md:py-16 lg:py-24 2xl:py-28 ${!hasBgImage && bgClass}`}
            style={
                hasBgImage
                    ? {
                        backgroundImage: `url(${getOptimizedImage(image).url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        color: "#000000",
                    }
                    : undefined
            }
        >
            <div className="inner-wrapper mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="section-head mx-auto mb-10 max-w-2xl text-center md:mb-12 lg:mb-14">
                    <HeadingElement
                        eyebrow={subTitle}
                        title={title || ""}
                        level="h2"
                        align="center"
                    />
                </div>

                <div className="cardWrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards}
                </div>

            </div>
        </div>
    );
};

export default GridElement;