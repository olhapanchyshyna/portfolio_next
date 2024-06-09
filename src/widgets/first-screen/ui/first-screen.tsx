import { TextWithCircle } from "../../../entities/text-with-circle";
import { CustomButton } from "../../../features/custom-button";
import Sheed from "./sheed";
import 'animate.css';

type FirstScreenProps = {
  SidePanel: () => JSX.Element;
};

export function FirstScreen({ SidePanel }: FirstScreenProps){
  return (
    <section className="h-[100vh] bg-[url('/first-screen-bg.jpg')] bg-cover bg-no-repeat">
      <div className="flex justify-end">
        <Sheed />
      </div>

      <div className="m-auto flex w-[340px] flex-col pt-[150px] min-[500px]:w-[480px] min-[500px]:pt-[200px] md:w-[600px] xl:w-[870px]">
        <TextWithCircle
          text="My name is Olha Panchyshyna"
          className="ml-[11px] "
        />
        <h1 className="mb-[60px] mt-[10px] text-[60px] font-bold leading-[70px] text-[rgba(255,_255,_255,_0.8901960784)] [text-shadow:#930196_5px_5px] min-[500px]:text-center md:text-[80px] md:leading-[90px] xl:mt-0 xl:text-[115px] xl:leading-[110px] animate__animated animate__pulse">
          I&apos;m a Frontend developer
        </h1>

        <div className="m-auto flex w-[330px] justify-between md:w-[400px] xl:w-[500px]">
          <CustomButton text="Portfolio" href="/" />
          <CustomButton text="About me" href="/" />
        </div>
      </div>

      <SidePanel />
    </section>
  );
}
