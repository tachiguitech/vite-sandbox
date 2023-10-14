import type { FC, ReactNode } from 'react';
import type { ClassNameValue } from 'tailwind-merge';
import { twMerge } from 'tailwind-merge';

export interface CardProps {
  children: ReactNode;
  readonly wholeClassName?: ClassNameValue;
  readonly bgClassName?: ClassNameValue;
}

const Card: FC<CardProps> = ({
  children,
  wholeClassName: wholeClass,
  bgClassName: bgClass
}) => {
  const wholeClassNameMerged = twMerge(
    'relative grid h-full w-full place-content-center place-items-center',
    wholeClass
  );
  const bgClassNameMerged = twMerge(
    'absolute h-full w-full rounded-lg bg-slate-100',
    bgClass
  );
  return (
    <div className={wholeClassNameMerged}>
      <div className={bgClassNameMerged} />
      <div className="absolute z-10">{children}</div>
    </div>
  );
};

export default Card;
