
import CallToAction from "@/components/CallToActionElement"
import HeadingElement from "@/components/HeadingElement"



export default function HomePage() {
  return (
    <>
      <h1 className="text-[4rem]">GFN Projekt</h1>

      <HeadingElement
        eyebrow="OUR SERVICES"
        title="Our provided Services"
        level="h2"
      />

      <CallToAction title="Subscribe to our Newsletter!" />
    </>
  )
}