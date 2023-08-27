import type { FC, ReactNode } from 'react';
import type { ClassNameValue } from 'tailwind-merge';
import { twMerge } from 'tailwind-merge';

interface Props {
  children: ReactNode;
  readonly wholeClassName?: ClassNameValue;
  readonly bgClassName?: ClassNameValue;
}

const Card: FC<Props> = ({
  children,
  wholeClassName: wholeClass,
  bgClassName: bgClass
}) => {
  const wholeClassNameMerged = twMerge(
    'relative grid h-[12em] w-[24em] place-content-center place-items-center',
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
