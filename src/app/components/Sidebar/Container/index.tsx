import { ReactNode } from 'react';

interface Props {
  isOpen: boolean;
  children: ReactNode;
}

const Container = ({ isOpen, children }: Props) => {
  const md = `h-screen`;

  return (
    <div
      className={`flex ${
        isOpen ? 'absolute top-0 left-0 w-64' : `w-12 h-12 ${md}`
      } bg-base-200 h-screen transition-width duration-300`}
    >
      <div className="flex flex-col w-full">{children}</div>
    </div>
  );
};

export default Container;
