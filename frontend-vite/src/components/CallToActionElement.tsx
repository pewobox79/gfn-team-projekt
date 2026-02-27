
import MyButton, { type MyButtonProps } from "./MyButton";

type CallToActionProps = {
  title: string;
  description: string
  bgColor?: string;
  hasButton?: boolean
  button?: MyButtonProps
};

export default function CallToAction({
  title,
  description = 'this description lorem ipsum was brought to you by blabla hirone the third company in a row.',
  bgColor = "black",
  hasButton= true,
  button={
    label:'Subscribe Now!',
    link:'',
    bgColor : "red",
    hasBorderRadius: true
  }
}: CallToActionProps) {

  const getBg = () => {
  if (bgColor === "red") return "bg-red-600";
  if (bgColor === "black") return "bg-black";
  if (bgColor === "white") return "bg-white";
  return "bg-black";
};

  return (
    <div className={`w-full rounded-2xl p-6 ${getBg()}`}>
      {/* Title */}
      

      {/* Input where to give your email + Button*/}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-4">
        <h2 className="text-white text-lg font-semibold whitespace-nowrap">{title}</h2>
        <p className="text-white">{description}</p>

        {/* Button */}
        {hasButton && <MyButton {...button}/>}
        

      </div>
    </div>
  );
}
