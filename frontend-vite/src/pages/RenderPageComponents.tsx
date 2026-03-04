import CallToAction from "@/components/CallToActionElement"
import GridElement from "@/components/GridElement/GridElement"
import type { GridElementProps } from "@/components/GridElement/types"
import Jumbotron from "@/components/Jumbotron"
import ReferenzElement from "@/components/ReferenzElement/ReferenzElement"
import type { ReferenzElementType } from "@/types/referenzElement"
import type { CallToActionProps, JumbotronType } from "@/types/types"

export interface PageBlockType {
    __component?: string,
    id?: string
}

export type PageBlockTypes = PageBlockType | ReferenzElementType | GridElementProps | CallToActionProps | JumbotronType

export default function RenderPageComponents(pageContentBlocks: PageBlockTypes[]) {

    if (!pageContentBlocks || Object.values(pageContentBlocks).length < 1) {
        return <h2>no page blocks available</h2>
    }

    const blockList = (pageContentBlocks: PageBlockTypes[]) => {

        const pageBlockElements = Object.values(pageContentBlocks).map((block, index) => {
            return renderComponent(block, index)
        })
        return pageBlockElements 
    }

    const renderComponent = (block: PageBlockTypes, index: number) => {
        let currentComponent: React.ReactElement | ReferenzElementType | CallToActionProps |JumbotronType | GridElementProps;
        switch (block.__component) {
            case "components.jumbotron":
                // currentComponent = <p>ToDo: use component reference-element here</p>
                currentComponent = <Jumbotron {...block as JumbotronType} />
                break;
            
            case "elements.reference-element":
                // currentComponent = <p>ToDo: use component reference-element here</p>
                currentComponent = <ReferenzElement {...block as ReferenzElementType} />
                break;
            case "elements.grid-element":
            
                currentComponent = <GridElement {...block as GridElementProps} />
                break;
            case "elements.cta-element":
            
                currentComponent = <CallToAction {...block as CallToActionProps} />
                break;


            default:
                currentComponent = <p>Unknown component: {block.__component}</p>
                break;
        }

        return <div className="margin-1rem" key={`${block.__component}-${block.id}-${index}`}>{currentComponent}</div>
    }

    return <div className="flex flex-col">
        {blockList(pageContentBlocks)}
    </div>

}