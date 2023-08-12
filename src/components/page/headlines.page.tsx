import { type FC, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const Headline: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="relative grid h-[12em] w-[24em] place-content-center place-items-center">
    <div className="absolute h-full w-full rounded-lg bg-slate-100" />
    <div className="absolute z-10">{children}</div>
  </div>
);

const HeadlinesPage: FC = () => {
  const text = 'なんかの情報';
  const subtext = 'Recruit';
  const base = 'font-ss-ja text-2xl font-medium';
  const numbase =
    'indent-[0.05em] font-ss-ja text-3xl font-bold tracking-[0.05em]';

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-row items-center gap-4 font-ss-en">
        <Link
          className="text-5xl text-blue-600 hover:text-blue-400 hover:underline"
          to="/"
        >
          {'<'}
        </Link>
        <span className="text-3xl font-bold">Headlines.</span>
      </div>
      <main className="grid grid-cols-2 gap-x-4 gap-y-6">
        <Headline>
          <span
            className={twMerge(
              base,
              'after:absolute after:bottom-0 after:-z-10 after:block after:w-full after:border-b-8 after:border-pink-600'
            )}
          >
            {text}
          </span>
        </Headline>
        <Headline>
          <span
            className={twMerge(
              base,
              'before:absolute before:bottom-[-8px] before:left-[-30%] before:-z-10 before:block before:w-[160%] before:border-b-4 before:border-rose-200',
              'after:absolute after:bottom-[-8px] after:left-[20%] after:block after:w-[60%] after:border-b-4 after:border-pink-600'
            )}
          >
            {text}
          </span>
        </Headline>
        <Headline>
          <span
            className={twMerge(
              base,
              'before:absolute before:bottom-[40%] before:left-[-40px] before:block before:w-[30px] before:border-b-2 before:border-rose-600',
              'after:absolute after:bottom-[40%] after:right-[-40px] after:block after:w-[30px] after:border-b-2 after:border-rose-600'
            )}
          >
            {text}
          </span>
        </Headline>
        <Headline>
          <span
            className={twMerge(
              base,
              'before:absolute before:bottom-[40%] before:left-[-40px] before:block before:w-[30px] before:rotate-45 before:border-b-2 before:border-rose-600',
              'after:absolute after:bottom-[40%] after:right-[-40px] after:block after:w-[30px] after:-rotate-45 after:border-b-2 after:border-rose-600'
            )}
          >
            {text}
          </span>
        </Headline>
        <Headline>
          <div className="flex flex-col items-center">
            <span
              className={twMerge(
                numbase,
                'relative mb-[28px] text-rose-400',
                'after:absolute after:bottom-[-24px] after:left-1/2 after:block after:h-[20px] after:translate-x-[-1px] after:border-l-2 after:border-rose-400'
              )}
            >
              01
            </span>
            <span className={base}>{text}</span>
          </div>
        </Headline>
        <Headline>
          <div className="flex flex-row items-center gap-3">
            <span
              className={twMerge(
                numbase,
                'relative text-rose-400',
                'after:absolute after:bottom-[-4px] after:left-[10%] after:block after:w-[80%] after:border-b-2 after:border-rose-400'
              )}
            >
              02
            </span>
            <span className={base}>{text}</span>
          </div>
        </Headline>
        <Headline>
          <div className="flex flex-col items-start">
            <span
              className={twMerge(
                numbase,
                'relative mb-[12px] text-rose-400',
                'after:absolute after:top-0 after:block after:w-[200%] after:border-t-2 after:border-rose-400'
              )}
            >
              03
            </span>
            <span className={base}>{text}</span>
          </div>
        </Headline>
        <Headline>
          <div className="flex flex-row items-end">
            <span
              className={twMerge(
                numbase,
                'relative -z-10 -mr-6 text-6xl text-rose-300',
                'after:absolute after:bottom-[-4px] after:left-[10%] after:block after:w-[120%] after:border-b-2 after:border-rose-400'
              )}
            >
              04
            </span>
            <span className={base}>{text}</span>
          </div>
        </Headline>
        <Headline>
          <span
            className={twMerge(
              base,
              'after:stripes-vertical after:absolute after:bottom-[-12px] after:left-[-30%] after:block after:h-[4px] after:w-[160%] after:stripes-rose-400 after:stripes-deg-90'
            )}
          >
            {text}
          </span>
        </Headline>
        <Headline>
          <span
            className={twMerge(
              base,
              'after:stripes-horizontal after:absolute after:bottom-[-12px] after:left-[-30%] after:block after:h-[3px] after:w-[160%] after:stripes-rose-400 after:stripes-deg-90'
            )}
          >
            {text}
          </span>
        </Headline>
        <Headline>
          <span
            className={twMerge(
              base,
              'after:stripes-vertical after:absolute after:bottom-[-12px] after:left-[-30%] after:block after:h-[6px] after:w-[160%] after:stripes-rose-400 after:stripes-deg-45'
            )}
          >
            {text}
          </span>
        </Headline>
        <Headline>
          <div
            className={twMerge(
              'relative flex flex-row items-baseline gap-2',
              'after:stripes-vertical after:absolute after:bottom-[2px] after:-z-10 after:block after:h-[10px] after:w-full after:stripes-rose-400 after:stripes-deg-135'
            )}
          >
            <span className={twMerge(base)}>{text}</span>
            <span
              className={twMerge(base, 'font-ss-en text-[1rem] font-semibold')}
            >
              {subtext}
            </span>
          </div>
        </Headline>
        <Headline>
          <div className={twMerge('flex flex-col items-center')}>
            <span
              className={twMerge(
                base,
                '-mb-1 font-ss-en text-xl font-semibold text-rose-500'
              )}
            >
              {subtext}
            </span>
            <span className={twMerge(base)}>{text}</span>
            <span
              className={twMerge(
                base,
                'relative mt-4 h-[30px] w-[30px]',
                'after:absolute after:bottom-[15px] after:block after:w-full after:-rotate-45 after:border-b-2 after:border-rose-500'
              )}
            />
          </div>
        </Headline>
        <Headline>
          <div className={twMerge('flex flex-col items-center')}>
            <span
              className={twMerge(
                base,
                '-mb-8 font-ss-en text-5xl font-semibold text-rose-300'
              )}
            >
              {subtext}
            </span>
            <span className={twMerge(base)}>{text}</span>
            <span
              className={twMerge(
                base,
                'relative mt-4 h-[30px] w-[30px]',
                'after:absolute after:bottom-[15px] after:block after:w-full after:-rotate-45 after:border-b-2 after:border-rose-500'
              )}
            />
          </div>
        </Headline>
        <Headline>
          <div className={twMerge('flex flex-col items-start')}>
            <span
              className={twMerge(
                base,
                '-mb-6 font-ss-en text-4xl font-semibold text-rose-300'
              )}
            >
              {subtext.toUpperCase()}
            </span>
            <span className={twMerge(base)}>{text}</span>
            <span
              className={twMerge(
                base,
                'relative mt-4 w-[240px]',
                'after:absolute after:left-0 after:block after:w-full after:border-b-2 after:border-rose-400'
              )}
            />
          </div>
        </Headline>
        <Headline>
          <div className={twMerge('flex flex-col items-end')}>
            <span
              className={twMerge(
                base,
                '-z-10 -mb-3 mr-6 -rotate-6 font-dsgn text-6xl text-rose-500'
              )}
            >
              {subtext}
            </span>
            <span className={twMerge(base)}>{text}</span>
          </div>
        </Headline>
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
