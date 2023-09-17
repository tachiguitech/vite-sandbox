import {
  useState,
  type FC,
  type ReactNode,
  useEffect,
  useCallback
} from 'react';
import type { EmblaCarouselType } from 'embla-carousel-react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import type { ClassNameValue } from 'tailwind-merge';
import { twMerge } from 'tailwind-merge';

const Slide: FC<{
  children: ReactNode;
  readonly className?: ClassNameValue;
  readonly opacity?: number;
}> = ({ children, className, opacity = 1.0 }) => (
  <motion.div
    className={twMerge(
      'grid min-w-0 shrink-0 grow-0 basis-[100%] place-content-center place-items-center',
      className
    )}
    initial={{ opacity: 1.0 }}
    animate={{ opacity }}
    transition={{ ease: 'easeInOut', duration: 0.2 }}
  >
    {children}
  </motion.div>
);

const Carousel: FC<{
  children: ReactNode[];
  readonly wholeClassName?: ClassNameValue;
  readonly listClassName?: ClassNameValue;
  readonly itemClassName?: ClassNameValue;
}> = ({ children, wholeClassName, listClassName, itemClassName }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [snapIndex, setSnapIndex] = useState<number | undefined>(undefined);
  const onSelect = useCallback((api: EmblaCarouselType) => {
    const index = api.selectedScrollSnap();
    setSnapIndex(index);
  }, []);
  useEffect(() => {
    emblaApi?.on('init', onSelect);
    emblaApi?.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <motion.div
      className={twMerge(
        'h-[16em] w-[32em] overflow-hidden bg-slate-400',
        wholeClassName
      )}
      initial={{ opacity: 0.0 }}
      animate={{ opacity: 1.0 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.4
      }}
      ref={emblaRef}
    >
      <div className={twMerge('flex h-full', listClassName)}>
        {children.map((child, index) => (
          <Slide
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={twMerge(itemClassName)}
            opacity={index === snapIndex ? 1.0 : 0.4}
          >
            {child}
          </Slide>
        ))}
      </div>
    </motion.div>
  );
};

export default Carousel;
