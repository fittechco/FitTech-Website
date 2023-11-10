import { MyText } from "./texts/myText";

export default function MyButton({ ...props }) {
  const { text, type, form, className, onClick } = props

  return (
    <button form={form} onClick={onClick} type="submit" className={`${className} px-8 py-3 btn btn-anim bg-accentColor hover:scale-105 buttonLinear w-fit backdrop-blur-sm`}>
      <MyText type={"h3"} className={"text-thirdColor  font-bold max-w-xl"}>
        {text}
      </MyText>
    </button>
  );
}
