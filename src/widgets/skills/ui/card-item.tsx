import { Card, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card'
import { Skill } from '../model/initial'
import Image from 'next/image'

type CardItemProps = {
  skill: Skill;
};

export const CardItem = ({ skill }: CardItemProps) => {
  return (
    <Card
      className={`m-auto h-[260px] max-w-[250px] rounded-[40px] border-[0.25px] border-[#ffffffb3] bg-[#030303] px-[10px] py-[30px] text-center text-[#ffffffed] md:mx-[5px] md:my-[10px] ${skill.bsh}`}
    >
      <CardHeader className="p-0">
        <Image
          src={skill.img}
          alt={skill.title}
          width={64}
          height={100}
          className="m-auto mb-[10px]"
        />
      </CardHeader>

      <CardTitle className="mb-[15px] text-center text-[14px] font-bold leading-[21px]">
        {skill.title}
      </CardTitle>
      <CardDescription className="p-0 text-center text-[12px] font-medium leading-[18px] text-[#ffffffed]">
        {skill.descr}
      </CardDescription>
    </Card>
  );
};