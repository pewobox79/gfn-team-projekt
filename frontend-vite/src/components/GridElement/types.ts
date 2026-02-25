

export interface GridItemProps {

    title: string,
    description: string,
    icon?: {
        src: string;
        alt?: string;
    },
    link?: string,
    bgColor?: 'white' | 'dark' | 'primary';
    bgImage?: string;
    hasBgImage?: boolean;
}


