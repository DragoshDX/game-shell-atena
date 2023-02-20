import { FiMeh } from 'react-icons/fi';

export const Header = () => {
  return (
    <div className="container mx-auto px-4 flex justify-between">
      <h1 className="uppercase font-bold text-lg inline-block">
        <FiMeh size={24} className="inline-block"></FiMeh>
        Game Shell
      </h1>

      <div>controls</div>
    </div>
  );
};
