import Image from "next/image";
import Link from "next/link";
import TextWithCircle from "./text-with-circle";
import Title from "./title";

export default function Contacts() {
  return (
    <section className="container m-auto flex flex-col justify-center pb-[120px] lg:flex-row">
      <Image
        src="/about-me.jpg"
        alt="About me"
        width={400}
        height={590}
        className="hidden h-[360px] w-[250px] rounded-[60px] brightness-[80%] filter [box-shadow:26px_30px_129px_0_#b621fe61,_-46px_-51px_60px_0_#f91fa145] sm:h-[430px] sm:w-[300px] sm:rounded-[80px] lg:block lg:h-[590px] lg:w-[400px]"
      />
      <div className="m-auto max-w-[280px] lg:m-0 lg:ml-[80px]">
        <div className="flex flex-col">
          <TextWithCircle
            text="Contacts"
            className="ml-0 before:left-[-2px] md:before:left-0"
          />
          <Title text="Contact me" />
        </div>
        <div className="mt-[60px] flex justify-between">
          <div className="main-gradient main-btn-hover mr-[10px] rounded-[10px] px-[26px] py-[12px] text-[14px] font-bold text-white [box-shadow:2px_2px_20px_rgb(1,_0,_1)] [transition:all_500ms_ease-in-out]">
            <Link
              href="https://www.linkedin.com/in/olha-panchyshyna/"
              target="_blank"
              className="[transition:transform_0.3s_ease] hover:scale-125"
            >
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                className="h-[20px] w-[20px] hover:text-[#930196]"
                width={24}
                height={24}
              />
            </Link>
          </div>
          <div className="main-gradient main-btn-hover mr-[10px] rounded-[10px] px-[26px] py-[12px] text-[14px] font-bold text-white [box-shadow:2px_2px_20px_rgb(1,_0,_1)] [transition:all_500ms_ease-in-out]">
            <Link
              href="/"
              target="_blank"
              className="[transition:transform_0.3s_ease] hover:scale-125"
            >
              <Image
                src="/telegram.png"
                alt="Telegram"
                className="h-[20px] w-[20px] hover:text-[#930196]"
                width={24}
                height={24}
              />
            </Link>
          </div>
          <div className="main-gradient main-btn-hover rounded-[10px] px-[26px] py-[12px] text-[14px] font-bold text-white [box-shadow:2px_2px_20px_rgb(1,_0,_1)] [transition:all_500ms_ease-in-out]">
            <Link
              href="https://mail.google.com/mail/u/0/?to=olha.panchyshyna@gmail.com&fs=1&tf=cm"
              target="_blank"
              className="[transition:transform_0.3s_ease] hover:scale-125"
            >
              <Image
                src="/gmail.png"
                alt="gmail"
                className="h-[20px] w-[20px] hover:text-[#930196]"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
