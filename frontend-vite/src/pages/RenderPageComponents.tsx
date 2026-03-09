import { lazy, Suspense } from "react"

//import CallToAction from "@/components/CallToActionElement"
//import GridElement from "@/components/GridElement/GridElement"
//import Jumbotron from "@/components/Jumbotron"
//import ReferenzElement from "@/components/ReferenzElement/ReferenzElement"

//lazy load block
const CallToAction = lazy(() => import('@/components/CallToActionElement'))
const GridElement =lazy(()=> import("@/components/GridElement/GridElement"))
const Jumbotron = lazy(()=>import('@/components/Jumbotron'))
const ReferenzElement = lazy(() => import("@/components/ReferenzElement/ReferenzElement"))

import type { ReferenzElementType } from "@/types/referenzElement"
import type { CallToActionProps, JumbotronType } from "@/types/types"
import type { GridElementProps } from "@/components/GridElement/types"

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
                currentComponent = <Suspense fallback={<h1 style={{ fontSize: '3rem', fontWeight: "bold" }}>Jumbotron loading...</h1>}><Jumbotron {...block as JumbotronType} /></Suspense>
                break;
            case "elements.reference-element":
                // currentComponent = <p>ToDo: use component reference-element here</p>
                currentComponent = <Suspense fallback={<h1 style={{ fontSize: '3rem', fontWeight: "bold" }}>ReferenzElement loading...</h1>}><ReferenzElement {...block as ReferenzElementType} /></Suspense>
                break;
            case "elements.grid-element":
                currentComponent = <Suspense fallback={<h1 style={{ fontSize: '3rem', fontWeight: "bold" }}>GridElement loading...</h1>}><GridElement {...block as GridElementProps} /></Suspense>
                break;
            case "elements.cta-element":
                currentComponent = <Suspense fallback={<h1 style={{ fontSize: '3rem', fontWeight: "bold" }}>GridElement loading...</h1>}><CallToAction {...block as CallToActionProps} /></Suspense>
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