export default function RenderPageComponents(pageContentBlocks: any) {

    console.log("pageContentBlocks", pageContentBlocks)

    if (!pageContentBlocks) {
        return <h2>no page blocks available</h2>
    }

    const blockList = (pageContentBlocks) => {
        // const pageBlockElements: React.ReactElement[] = [];
        // const pageBlockElements = []

        console.log("pageContentBlocks bevore map", pageContentBlocks)

        // pageContentBlocks.forEach((element,index) => {
        //     pageBlockElements.push(renderComponent(block, index))
        // });

        // const pageBlockElements = pageContentBlocks.map((block, index) => {
        //     console.log("block", block)
        //     return renderComponent(block, index)
        // })

        const pageBlockElements = Object.values(pageContentBlocks).map((block, index) => {
            console.log("block", block)
            return renderComponent(block, index)
        })
        return pageBlockElements 
    }

    const renderComponent = (block: any, index: number) => {
        let currentComponent: React.ReactElement | undefined;
        switch (block.__component) {
            case "elements.reference-element":
                console.log("switch elements.reference-element", block.__component)
                currentComponent = <p>ToDo: use component reference-element here</p>
                // currentComponent = <ReferenzElement key={`${block.__component}-${block.id}`} {...block} />
                break;
            default:
                currentComponent = <p>Unknown component: {block.__component}</p>
                break;
        }

        return <div key={`${block.__component}-${block.id}-${index}`}>{currentComponent}</div>
    }

    console.log("blockList", blockList(pageContentBlocks))


    return <div>
        {blockList(pageContentBlocks)}
    </div>

}