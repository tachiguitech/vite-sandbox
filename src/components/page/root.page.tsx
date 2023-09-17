import type { FC } from 'react';
import { Link } from 'react-router-dom';

const RootPage: FC = () => (
  <div className="grid h-screen w-screen place-content-center place-items-center">
    <div className="flex flex-col items-center gap-4 font-ss-en text-3xl font-bold">
      <span>Root.</span>
      <div className="flex flex-col items-center gap-2">
        <Link
          className="text-blue-600 hover:text-blue-400 hover:underline hover:underline-offset-4"
          to="/headlines"
        >
          Headlines
        </Link>
        <Link
          className="text-blue-600 hover:text-blue-400 hover:underline hover:underline-offset-4"
          to="/animations"
        >
          Animations
        </Link>
        <Link
          className="text-blue-600 hover:text-blue-400 hover:underline hover:underline-offset-4"
          to="/carousels"
        >
          Carousels
        </Link>
        <Link
          className="text-blue-600 hover:text-blue-400 hover:underline hover:underline-offset-4"
          to="/pik"
        >
          Pik
        </Link>
      </div>
    </div>
  </div>
);

export default RootPage;
