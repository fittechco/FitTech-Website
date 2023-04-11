import { MyText } from "../texts/myText";

export default function   MyButton({...props}) {
  const { text, type, form, className, onClick } = props

  return (
    <button form={form} onClick={onClick} type="submit" className={`"px-3 py-2 border border-accentColor2 buttonLinear  w-fit backdrop-blur-sm ${className}`}>
      <MyText type={"h4"} className={"text-accentColor2  font-bold max-w-xl"}>
        {text}
      </MyText>
    </button>
  );
}
