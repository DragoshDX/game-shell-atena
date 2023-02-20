import { FiMeh } from 'react-icons/fi';

export const Header = () => {
  return (
    <div className="container mx-auto px-4 flex justify-between">
      <h1 className="uppercase font-bold text-lg inline-block">
        <FiMeh></FiMeh>
        Game Shell
      </h1>
    </div>
  );
};
