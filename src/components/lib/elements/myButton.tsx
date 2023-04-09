import { MyText } from "../texts/myText";

export default function MyButton({ text }: { text: string }) {
  return (
    <button className="px-3 py-2 border border-accentColor2 buttonLinear  w-fit backdrop-blur-sm">
      <MyText type={"h4"} className={"text-accentColor2  font-bold max-w-xl"}>
        {text}
      </MyText>
    </button>
  );
}
