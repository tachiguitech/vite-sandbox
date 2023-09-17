import { type FC } from 'react';
import Card from '../ui/card';
import Carousel from '../ui/carousel';

const CarouselsPage: FC = () => (
  <div className="min-w-screen grid min-h-screen place-content-center place-items-center">
    <main className="flex flex-col items-center gap-4">
      <Carousel>
        <Card bgClassName="border-2 border-rose-200">
          <span className="font-ss-en text-3xl font-bold">1</span>
        </Card>
        <Card bgClassName="border-2 border-rose-200">
          <span className="font-ss-en text-3xl font-bold">2</span>
        </Card>
        <Card bgClassName="border-2 border-rose-200">
          <span className="font-ss-en text-3xl font-bold">3</span>
        </Card>
        <Card bgClassName="border-2 border-rose-200">
          <span className="font-ss-en text-3xl font-bold">4</span>
        </Card>
        <Card bgClassName="border-2 border-rose-200">
          <span className="font-ss-en text-3xl font-bold">5</span>
        </Card>
        <Card bgClassName="border-2 border-rose-200">
          <span className="font-ss-en text-3xl font-bold">6</span>
        </Card>
      </Carousel>
      <Carousel listClassName="mx-[4em] gap-[1em]" itemClassName="basis-[24em]">
        <Card bgClassName="border-2 border-rose-200">
          <span className="font-ss-en text-3xl font-bold">1</span>
        </Card>
        <Card bgClassName="border-2 border-rose-200">
          <span className="font-ss-en text-3xl font-bold">2</span>
        </Card>
        <Card bgClassName="border-2 border-rose-200">
          <span className="font-ss-en text-3xl font-bold">3</span>
        </Card>
        <Card bgClassName="border-2 border-rose-200">
          <span className="font-ss-en text-3xl font-bold">4</span>
        </Card>
        <Card bgClassName="border-2 border-rose-200">
          <span className="font-ss-en text-3xl font-bold">5</span>
        </Card>
        <Card bgClassName="border-2 border-rose-200">
          <span className="font-ss-en text-3xl font-bold">6</span>
        </Card>
      </Carousel>
    </main>
  </div>
);
export default CarouselsPage;
