import { useState, type FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimationControls } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import Card from '../ui/card';

const PikPage: FC = () => {
  const [, setBlink] = useState<boolean>(false);
  const controls = useAnimationControls();
  useEffect(() => {
    controls.set({ opacity: 0 });
  }, []);

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
      <div className="grid place-content-center place-items-center">
        <main className="flex flex-col items-center gap-4">
          <Card bgClassName="bg-black">
            <span className="bg-gradient-to-b from-orange-50 to-orange-200 bg-clip-text font-ss-ja text-6xl font-bold text-transparent drop-shadow-org-orange">
              どっかの洞窟
            </span>
          </Card>
          <Card bgClassName="bg-black">
            <div className="flex w-[16em] flex-col items-center gap-2 text-sky-300">
              <div
                className={twMerge(
                  'relative flex w-full flex-row justify-around pb-1',
                  'after:absolute after:bottom-0 after:block after:w-full after:border-b-[1px] after:border-b-sky-300/90'
                )}
              >
                <span className="font-ss-ja text-2xl font-bold">調査率</span>
                <div className="font-ss-en">
                  <span className="text-2xl font-bold">0</span>
                  <span className="text-md ml-0.5 font-bold">%</span>
                </div>
              </div>
              <div className="flex w-full flex-col items-center gap-1">
                <div
                  className={twMerge(
                    'relative mx-2 flex w-full flex-row justify-between',
                    'after:absolute after:bottom-0 after:block after:w-full after:border-b-[1px] after:border-dashed after:border-b-sky-300/60'
                  )}
                >
                  <span className="font-ss-ja text-lg font-bold tracking-tighter">
                    救助した人
                  </span>
                  <div className="flex flex-row gap-1 font-ss-en text-lg">
                    <span>0</span>
                    <span>/</span>
                    <span>8</span>
                  </div>
                </div>
                <div
                  className={twMerge(
                    'relative flex w-full flex-row justify-between',
                    'after:absolute after:bottom-0 after:block after:w-full after:border-b-[1px] after:border-dashed after:border-b-sky-300/60'
                  )}
                >
                  <span className="font-ss-ja text-lg font-bold tracking-tighter">
                    オタカラ
                  </span>
                  <div className="flex flex-row gap-1 font-ss-en text-lg">
                    <span>0</span>
                    <span>/</span>
                    <span>60</span>
                  </div>
                </div>
                <div
                  className={twMerge(
                    'relative flex w-full flex-row justify-between',
                    'after:absolute after:bottom-0 after:block after:w-full after:border-b-[1px] after:border-dashed after:border-b-sky-300/60'
                  )}
                >
                  <span className="font-ss-ja text-lg font-bold tracking-tighter">
                    オニヨン類
                  </span>
                  <div className="flex flex-row gap-1 font-ss-en text-lg">
                    <span>0</span>
                    <span>/</span>
                    <span>??</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card bgClassName="bg-[url('/image_bg.jpg')]">
            <div className="flex h-[6em] w-[22em] flex-col items-start rounded-sm border-2 border-sky-300 font-ss-ja text-sky-300 drop-shadow-org-sky backdrop-blur-lg">
              <div className="flex h-[1.5em] flex-row items-center border-b-2 border-sky-300 pl-[1.5em]">
                <span className="w-[6em] text-lg font-medium">なぞの女</span>
              </div>
              <div className="flex h-[4.5em] w-full flex-row items-center p-1">
                <div className="m-2 h-10 w-10 shrink-0 rounded-full bg-[url('/image_avatar.png')] bg-cover" />
                <div className="grid h-full grow auto-rows-[auto_1fr] grid-cols-[1fr] place-items-center">
                  <span className="col-span-full grid grid-cols-[1fr] overflow-y-scroll whitespace-pre-line text-sm">
                    {`ここにいい感じの会話文を置いてね。
                        いい感じの会話が思いつかなかったよ！`}
                  </span>
                </div>
              </div>
            </div>
          </Card>
          <div className="flex flex-col items-center gap-1">
            <Card bgClassName="bg-[url('/image_bg.jpg')]">
              <div className="grid h-[6em] w-[22em] place-content-center place-items-center">
                <motion.div
                  className="absolute z-10 h-full w-full rounded-sm border-2 border-white"
                  animate={controls}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }}
                />
                <div className="absolute flex h-full w-full flex-col items-start rounded-sm border-2 border-sky-300 font-ss-ja text-sky-300 drop-shadow-org-sky backdrop-blur-lg">
                  <div className="flex h-[1.5em] flex-row items-center border-b-2 border-sky-300 pl-[1.5em]">
                    <span className="w-[6em] text-lg font-medium">
                      なぞの女
                    </span>
                  </div>
                  <div className="flex h-[4.5em] w-full flex-row items-center p-1">
                    <div className="m-2 h-10 w-10 shrink-0 rounded-full bg-[url('/image_avatar.png')] bg-cover" />
                    <div className="grid h-full grow auto-rows-[auto_1fr] grid-cols-[1fr] place-items-center">
                      <span className="col-span-full grid grid-cols-[1fr] overflow-y-scroll whitespace-pre-line text-sm">
                        {`ここにいい感じの会話文を置いてね。
                        いい感じの会話が思いつかなかったよ！`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <button
              className="rounded-md bg-slate-700 px-4 py-2 font-ss-en text-lg text-slate-50 shadow-md hover:bg-slate-500 active:translate-y-0.5"
              type="button"
              onClick={() => {
                setBlink((prev) => {
                  const next = !prev;
                  if (next) {
                    controls.start({
                      opacity: [null, 0, 0.75]
                    });
                  } else {
                    controls.stop();
                    controls.set({ opacity: 0 });
                  }
                  return next;
                });
              }}
            >
              Blink
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};
export default PikPage;
