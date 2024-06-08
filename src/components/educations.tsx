import TextWithCircle from "./text-with-circle";
import TimeLine from "./time-line-Item";
import Title from "./title";

export default function Educations() {
  return (
    <section id="educations" className="container pb-[120px]">
      <div className="flex flex-col items-center">
        <TextWithCircle
          text="Education"
          className="ml-0 before:left-[25%] md:before:left-[28%]"
        />
        <Title text="My courses" className="m-auto mt-[10px]" />
        <div className="mt-[20px] text-[#ffffff7d]">2022 - 2024</div>
      </div>

      <TimeLine />
    </section>
  );
}
