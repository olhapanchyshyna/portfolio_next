import { Card } from '@/shared/ui/card'
import { TPortfolio } from '../model/initial'

type CardItemProps = {
  portfolio: TPortfolio;
};

export const CardItem = ({ portfolio }: CardItemProps) => {
  return (
    <Card
      className={`m-auto h-[320px] w-[300px] rounded-[40px] md:mx-[5px] md:my-[10px] md:w-[340px] ${portfolio.img} bg-cover bg-no-repeat`}
    ></Card>
  );
};
