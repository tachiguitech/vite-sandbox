import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import type { CardProps } from '../ui/card';
import Card from '../ui/card';
import Title from '../ui/title';

const CommonCard: FC<CardProps> = ({ children }) => (
  <Card wholeClassName="h-[12em] max-w-full">{children}</Card>
);

const HeadlinesPage: FC = () => {
  const text = 'なんかの情報';
  const subtext = 'Recruit';
  const baseClassName = 'font-ss-ja text-2xl font-medium';
  const numbaseClassName =
    'indent-[0.05em] font-ss-ja text-3xl font-bold tracking-[0.05em]';

  return (
    <div className="flex flex-col items-center gap-8">
      <Title label="Headlines." />
      <main className="grid w-[80vw] grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] place-items-center gap-x-4 gap-y-6">
        <CommonCard>
          <span
            className={twMerge(
              baseClassName,
              'after:absolute after:bottom-0 after:-z-10 after:block after:w-full after:border-b-8 after:border-pink-600'
            )}
          >
            {text}
          </span>
        </CommonCard>
        <CommonCard>
          <span
            className={twMerge(
              baseClassName,
              'before:absolute before:bottom-[-8px] before:left-[-30%] before:-z-10 before:block before:w-[160%] before:border-b-4 before:border-rose-200',
              'after:absolute after:bottom-[-8px] after:left-[20%] after:block after:w-[60%] after:border-b-4 after:border-pink-600'
            )}
          >
            {text}
          </span>
        </CommonCard>
        <CommonCard>
          <span
            className={twMerge(
              baseClassName,
              'before:absolute before:bottom-[40%] before:left-[-40px] before:block before:w-[30px] before:border-b-2 before:border-rose-600',
              'after:absolute after:bottom-[40%] after:right-[-40px] after:block after:w-[30px] after:border-b-2 after:border-rose-600'
            )}
          >
            {text}
          </span>
        </CommonCard>
        <CommonCard>
          <span
            className={twMerge(
              baseClassName,
              'before:absolute before:bottom-[40%] before:left-[-40px] before:block before:w-[30px] before:rotate-45 before:border-b-2 before:border-rose-600',
              'after:absolute after:bottom-[40%] after:right-[-40px] after:block after:w-[30px] after:-rotate-45 after:border-b-2 after:border-rose-600'
            )}
          >
            {text}
          </span>
        </CommonCard>
        <CommonCard>
          <div className="flex flex-col items-center">
            <span
              className={twMerge(
                numbaseClassName,
                'relative mb-[28px] text-rose-400',
                'after:absolute after:bottom-[-24px] after:left-1/2 after:block after:h-[20px] after:translate-x-[-1px] after:border-l-2 after:border-rose-400'
              )}
            >
              01
            </span>
            <span className={baseClassName}>{text}</span>
          </div>
        </CommonCard>
        <CommonCard>
          <div className="flex flex-row items-center gap-3">
            <span
              className={twMerge(
                numbaseClassName,
                'relative text-rose-400',
                'after:absolute after:bottom-[-4px] after:left-[10%] after:block after:w-[80%] after:border-b-2 after:border-rose-400'
              )}
            >
              02
            </span>
            <span className={baseClassName}>{text}</span>
          </div>
        </CommonCard>
        <CommonCard>
          <div className="flex flex-col items-start">
            <span
              className={twMerge(
                numbaseClassName,
                'relative mb-[12px] text-rose-400',
                'after:absolute after:top-0 after:block after:w-[200%] after:border-t-2 after:border-rose-400'
              )}
            >
              03
            </span>
            <span className={baseClassName}>{text}</span>
          </div>
        </CommonCard>
        <CommonCard>
          <div className="flex flex-row items-end">
            <span
              className={twMerge(
                numbaseClassName,
                'relative -z-10 -mr-6 text-6xl text-rose-300',
                'after:absolute after:bottom-[-4px] after:left-[10%] after:block after:w-[120%] after:border-b-2 after:border-rose-400'
              )}
            >
              04
            </span>
            <span className={baseClassName}>{text}</span>
          </div>
        </CommonCard>
        <CommonCard>
          <span
            className={twMerge(
              baseClassName,
              'after:stripes-vertical after:absolute after:bottom-[-12px] after:left-[-30%] after:block after:h-[4px] after:w-[160%] after:stripes-rose-400 after:stripes-deg-90'
            )}
          >
            {text}
          </span>
        </CommonCard>
        <CommonCard>
          <span
            className={twMerge(
              baseClassName,
              'after:stripes-horizontal after:absolute after:bottom-[-12px] after:left-[-30%] after:block after:h-[3px] after:w-[160%] after:stripes-rose-400 after:stripes-deg-90'
            )}
          >
            {text}
          </span>
        </CommonCard>
        <CommonCard>
          <span
            className={twMerge(
              baseClassName,
              'after:stripes-vertical after:absolute after:bottom-[-12px] after:left-[-30%] after:block after:h-[6px] after:w-[160%] after:stripes-rose-400 after:stripes-deg-45'
            )}
          >
            {text}
          </span>
        </CommonCard>
        <CommonCard>
          <div
            className={twMerge(
              'relative flex flex-row items-baseline gap-2',
              'after:stripes-vertical after:absolute after:bottom-[2px] after:-z-10 after:block after:h-[10px] after:w-full after:stripes-rose-400 after:stripes-deg-135'
            )}
          >
            <span className={twMerge(baseClassName)}>{text}</span>
            <span
              className={twMerge(
                baseClassName,
                'font-ss-en text-[1rem] font-semibold'
              )}
            >
              {subtext}
            </span>
          </div>
        </CommonCard>
        <CommonCard>
          <div className="flex flex-col items-center">
            <span
              className={twMerge(
                baseClassName,
                '-mb-1 font-ss-en text-xl font-semibold text-rose-500'
              )}
            >
              {subtext}
            </span>
            <span className={baseClassName}>{text}</span>
            <span
              className={twMerge(
                baseClassName,
                'relative mt-4 h-[30px] w-[30px]',
                'after:absolute after:bottom-[15px] after:block after:w-full after:-rotate-45 after:border-b-2 after:border-rose-500'
              )}
            />
          </div>
        </CommonCard>
        <CommonCard>
          <div className="flex flex-col items-center">
            <span
              className={twMerge(
                baseClassName,
                '-mb-8 font-ss-en text-5xl font-semibold text-rose-300'
              )}
            >
              {subtext}
            </span>
            <span className={baseClassName}>{text}</span>
            <span
              className={twMerge(
                baseClassName,
                'relative mt-4 h-[30px] w-[30px]',
                'after:absolute after:bottom-[15px] after:block after:w-full after:-rotate-45 after:border-b-2 after:border-rose-500'
              )}
            />
          </div>
        </CommonCard>
        <CommonCard>
          <div className="flex flex-col items-start">
            <span
              className={twMerge(
                baseClassName,
                '-mb-6 font-ss-en text-4xl font-semibold text-rose-300'
              )}
            >
              {subtext.toUpperCase()}
            </span>
            <span className={baseClassName}>{text}</span>
            <span
              className={twMerge(
                baseClassName,
                'relative mt-4 w-[240px]',
                'after:absolute after:left-0 after:block after:w-full after:border-b-2 after:border-rose-400'
              )}
            />
          </div>
        </CommonCard>
        <CommonCard>
          <div className="flex flex-col items-end">
            <span
              className={twMerge(
                baseClassName,
                '-z-10 -mb-3 mr-6 -rotate-6 font-dsgn text-6xl text-rose-500'
              )}
            >
              {subtext}
            </span>
            <span className={baseClassName}>{text}</span>
          </div>
        </CommonCard>
      </main>
      <div className="font-ss-en text-xl font-bold">
        <span>References:</span>
        <Link
          className="mx-2 text-blue-600 hover:text-blue-400 hover:underline hover:underline-offset-4"
          to="https://twitter.com/pulpxstyle/status/1592487884157657088"
          target="_blank"
        >
          X Post
        </Link>
      </div>
    </div>
  );
};

export default HeadlinesPage;
