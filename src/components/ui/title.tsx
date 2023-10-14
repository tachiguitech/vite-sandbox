import type { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  label: string;
}

const Title: FC<Props> = ({ label }) => (
  <div className="flex flex-row items-center gap-4 font-ss-en">
    <Link
      className="text-5xl text-blue-600 hover:text-blue-400 hover:underline"
      to="/"
    >
      {'<'}
    </Link>
    <span className="text-3xl font-bold">{label}</span>
  </div>
);

export default Title;
