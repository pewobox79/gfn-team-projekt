export interface PageBlockType {
    __component?: string,
    id?: string
}

export type PageBlockTypes = PageBlockType

export default function RenderPageComponents(pageContentBlocks: PageBlockTypes[]) {

    console.log("pageContentBlocks", pageContentBlocks)

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
        let currentComponent: React.ReactElement | undefined;
        switch (block.__component) {
            case "elements.reference-element":
                currentComponent = <p>ToDo: use component reference-element here</p>
                // currentComponent = <ReferenzElement key={`${block.__component}-${block.id}`} {...block} />
                break;
            default:
                currentComponent = <p>Unknown component: {block.__component}</p>
                break;
        }

        return <div key={`${block.__component}-${block.id}-${index}`}>{currentComponent}</div>
    }

    return <div>
        {blockList(pageContentBlocks)}
    </div>

}