import { type FC } from 'react';
import { Link } from 'react-router-dom';
import type { CardProps } from '../ui/card';
import Card from '../ui/card';
import Carousel from '../ui/carousel';
import Title from '../ui/title';

const CommonCard: FC<CardProps> = ({ children }) => (
  <Card wholeClassName="h-[12em] max-w-full">{children}</Card>
);

const CarouselsPage: FC = () => (
  <div className="flex flex-col items-center gap-8">
    <Title label="Carousels." />
    <main className="grid w-[80vw] grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] items-start justify-items-center gap-x-4 gap-y-6">
      <Carousel
        wholeClassName="h-[16em]"
        listClassName="gap-[15%]"
        itemClassName="basis-[80%]"
      >
        <CommonCard bgClassName="border-2 border-rose-200">
          <span className="font-ss-en text-3xl font-bold">1</span>
        </CommonCard>
        <CommonCard bgClassName="border-2 border-rose-200">
          <span className="font-ss-en text-3xl font-bold">2</span>
        </CommonCard>
        <CommonCard bgClassName="border-2 border-rose-200">
          <span className="font-ss-en text-3xl font-bold">3</span>
        </CommonCard>
        <CommonCard bgClassName="border-2 border-rose-200">
          <span className="font-ss-en text-3xl font-bold">4</span>
        </CommonCard>
        <CommonCard bgClassName="border-2 border-rose-200">
          <span className="font-ss-en text-3xl font-bold">5</span>
        </CommonCard>
        <CommonCard bgClassName="border-2 border-rose-200">
          <span className="font-ss-en text-3xl font-bold">6</span>
        </CommonCard>
      </Carousel>
      <Carousel
        wholeClassName="h-[16em]"
        listClassName="gap-4"
        itemClassName="basis-[60%]"
      >
        <CommonCard bgClassName="border-2 border-rose-200">
          <span className="font-ss-en text-3xl font-bold">1</span>
        </CommonCard>
        <CommonCard bgClassName="border-2 border-rose-200">
          <span className="font-ss-en text-3xl font-bold">2</span>
        </CommonCard>
        <CommonCard bgClassName="border-2 border-rose-200">
          <span className="font-ss-en text-3xl font-bold">3</span>
        </CommonCard>
        <CommonCard bgClassName="border-2 border-rose-200">
          <span className="font-ss-en text-3xl font-bold">4</span>
        </CommonCard>
        <CommonCard bgClassName="border-2 border-rose-200">
          <span className="font-ss-en text-3xl font-bold">5</span>
        </CommonCard>
        <CommonCard bgClassName="border-2 border-rose-200">
          <span className="font-ss-en text-3xl font-bold">6</span>
        </CommonCard>
      </Carousel>
    </main>
    <div className="font-ss-en text-xl font-bold">
      <span>Library:</span>
      <Link
        className="mx-2 text-blue-600 hover:text-blue-400 hover:underline hover:underline-offset-4"
        to="https://www.embla-carousel.com/"
        target="_blank"
      >
        Embla Carousel
      </Link>
    </div>
  </div>
);
export default CarouselsPage;
