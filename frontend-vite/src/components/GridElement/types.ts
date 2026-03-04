import type { ImageType, MyButtonProps } from "@/types/types";

export interface GridItemProps {
  title?: string;
  description: string;
  hasButton?: boolean;
  button?: MyButtonProps;
  icon?: {
    src?: string;
    alt?: string;
  };
  bgColor?: "red" | "white" | "black";
  bgImage?: ImageType;
  hasBgImage?: boolean;
  id?: string
}

export interface GridElementProps {
  __component?: string,
  id?: string
  title?: string;
  subTitle?: string;
  items?: GridItemProps[];
  hasBgImage?: boolean;
  bgColor?: "red" | "white" | "black";
  image?: ImageType;
}