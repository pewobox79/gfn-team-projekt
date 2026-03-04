import type { GridItemProps } from "./types";



const GridItem = ({title, description, icon, link, bgColor, bgImage, hasBgImage}: GridItemProps) => {

    return (
        <div className='wrapper-inner w-full md:w-1/2 lg:w-1/3 mb-8'>
            <div className='content'>
           {icon && <img className='icon' src={icon.src}  alt={icon.alt ?? ''}/>}
            <h3 className='title'>{title}</h3>
            <p className='description'>{description}</p>
            <button></button>
            </div>
            </div>     
    
    );

}
export default GridItem;