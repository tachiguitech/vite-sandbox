import type { FC } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useTransform
} from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import Card from '../ui/card';

const AnimationsPage: FC = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const dragValue = useMotionValue(0);
  const styleWithDrag = useTransform(dragValue, [-100, 100], ['#eee', '#111']);
  const [justifyStart, setJustifyStart] = useState<boolean>(true);
  const [visibleList, setVisibleList] = useState<boolean>(true);
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed z-30 h-2 w-screen bg-yellow-300 opacity-40"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-row items-center gap-4 font-ss-en">
          <Link
            className="text-5xl text-blue-600 hover:text-blue-400 hover:underline"
            to="/"
          >
            {'<'}
          </Link>
          <span className="text-3xl font-bold">Animations.</span>
        </div>
        <div className="grid place-content-center place-items-center">
          <main className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <Card>
                <AnimatePresence mode="wait">
                  {visible && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, y: [16, 0] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.0, ease: 'easeOut' }}
                    >
                      <span className="border-2 border-slate-600 p-2 font-ss-en text-2xl font-bold">
                        Mount / Unmount
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
              <button
                className="rounded-md bg-slate-700 px-4 py-2 font-ss-en text-lg text-slate-50 shadow-md hover:bg-slate-500 active:translate-y-0.5"
                type="button"
                onClick={() => setVisible(!visible)}
              >
                Change
              </button>
            </div>
            <Card>
              <motion.div
                initial={{ scale: 1.0 }}
                whileHover={{ scale: [null, 1.5, 1.45] }}
                transition={{ duration: 1.0 }}
              >
                <span className="border-2 border-slate-600 p-2 font-ss-en text-2xl font-bold">
                  Hoverrr
                </span>
              </motion.div>
            </Card>
            <Card>
              <motion.div
                drag="x"
                dragConstraints={{
                  left: -100,
                  right: 100
                }}
                dragSnapToOrigin
                dragElastic={0}
                dragTransition={{
                  power: 0.1,
                  bounceStiffness: 200,
                  bounceDamping: 2
                }}
                style={{ x: dragValue }}
              >
                <motion.div style={{ color: styleWithDrag }}>
                  <span className="border-2 border-slate-600 p-2 font-ss-en text-2xl font-bold">
                    Draggg
                  </span>
                </motion.div>
              </motion.div>
            </Card>
            <div className="flex flex-col items-center gap-1">
              <Card>
                <div
                  className={twMerge(
                    'flex h-[10em] flex-col',
                    justifyStart ? 'justify-start' : 'justify-end'
                  )}
                >
                  <motion.span
                    layout
                    className="border-2 border-slate-600 p-2 font-ss-en text-2xl font-bold"
                  >
                    Posss
                  </motion.span>
                </div>
              </Card>
              <button
                className="rounded-md bg-slate-700 px-4 py-2 font-ss-en text-lg text-slate-50 shadow-md hover:bg-slate-500 active:translate-y-0.5"
                type="button"
                onClick={() => setJustifyStart(!justifyStart)}
              >
                Change
              </button>
            </div>
            <Card>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 'all' }}
                transition={{ duration: 2.0, ease: 'easeInOut' }}
              >
                <span className="border-2 border-slate-600 p-2 font-ss-en text-2xl font-bold">
                  InView
                </span>
              </motion.div>
            </Card>
            <div className="flex flex-col items-center gap-1">
              <Card>
                <AnimatePresence mode="wait">
                  {visibleList && (
                    <motion.div
                      className="flex flex-col items-start gap-2 border-2 border-slate-600 px-12 py-2 font-ss-en"
                      variants={{
                        hidden: {
                          opacity: 0.0,
                          scale: 0.8
                        },
                        visible: {
                          opacity: 1.0,
                          scale: 1.0,
                          transition: {
                            duration: 0.4,
                            when: 'beforeChildren',
                            staggerChildren: 0.2
                          }
                        },
                        exit: {
                          opacity: 0.0,
                          transition: {
                            duration: 0.2,
                            when: 'afterChildren'
                          }
                        }
                      }}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {[...Array(4)].map((_, index) => (
                        <motion.div
                          variants={{
                            hidden: {
                              opacity: 0.0,
                              x: 20
                            },
                            visible: {
                              opacity: 1.0,
                              x: 0,
                              transition: { duration: 0.8 }
                            },
                            exit: {
                              opacity: 0.0,
                              transition: {
                                duration: 0.2
                              }
                            }
                          }}
                        >
                          <span className="border-2 border-slate-600/30 px-2 text-2xl font-bold">
                            Item {index}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
              <button
                className="rounded-md bg-slate-700 px-4 py-2 font-ss-en text-lg text-slate-50 shadow-md hover:bg-slate-500 active:translate-y-0.5"
                type="button"
                onClick={() => setVisibleList(!visibleList)}
              >
                Change
              </button>
            </div>
          </main>
        </div>
        <div className="font-ss-en text-xl font-bold">
          <span>Library:</span>
          <Link
            className="mx-2 text-blue-600 hover:text-blue-400 hover:underline hover:underline-offset-4"
            to="https://www.framer.com/motion/introduction/"
            target="_blank"
          >
            Framer Motion
          </Link>
        </div>
      </div>
    </>
  );
};

export default AnimationsPage;
