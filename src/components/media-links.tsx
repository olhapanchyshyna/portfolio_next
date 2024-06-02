import Image from "next/image";
import Link from "next/link";

export default function MediaLinks() {
  return (
    <>
      <Link
        href="https://github.com/olhapanchyshyna"
        target="_blank"
        className="[transition:transform_0.3s_ease] hover:scale-125"
      >
        <Image
          src="/github.png"
          alt="GitHub"
          className="h-[20px] w-[20px] hover:fill-[#930196]"
          width={24}
          height={24}
        />
      </Link>
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
    </>
  );
}
