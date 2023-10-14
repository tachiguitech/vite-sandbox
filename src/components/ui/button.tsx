import type { FC } from 'react';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';

type Props = HTMLMotionProps<'button'> & {
  label: string;
};

const Button: FC<Props> = ({ label, ...props }) => (
  <motion.button
    className="min-w-[4em] rounded-md bg-slate-700 px-4 py-2 font-ss-en text-lg text-slate-50 shadow-md hover:bg-slate-500"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    type="button"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {label}
  </motion.button>
);

export default Button;
