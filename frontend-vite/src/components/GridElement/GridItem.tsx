import type { GridItemProps } from "./types";



const GridItem = ({title, description, icon, link}: GridItemProps) => {

    return (
    <div className='cardWrapper'>
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