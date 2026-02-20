import React from 'react'

interface HeadingElementProps{
    title: string
    eyebrow?: string
    level?: Level
    align?: Align
    
}

type Level= 'h1' | 'h2' | 'h3' | 'h4'
type Align= 'left' | 'center' | 'right'

const HeadingElement=({level='h2', align='center', title, eyebrow}: HeadingElementProps)=>{
    const Tag: React.ElementType = level
    return (
    <div className={`heading heading--${align}`}>
        {eyebrow && <p className={`heading__eyebrow`}>{eyebrow}</p>}
        {React.createElement(Tag, {className:'heading__title'}, title)}
        
    </div>
    )
}

export default HeadingElement