import type { MyButtonProps } from "../MyButton";

export interface GridItemProps {
  title: string;
  description: string;
  hasButton?: boolean;
  button?: MyButtonProps;
  icon?: {
    src: string;
    alt?: string;
  };
  bgColor?: "red" | "white" | "black";
  bgImage?: string;
  hasBgImage?: boolean;
}

export interface GridElementProps {
  title: string;
  subTitle: string;
  items: GridItemProps[];
  hasBgImage?: boolean;
  bgColor?: "red" | "white" | "black";
  image?: string;
}