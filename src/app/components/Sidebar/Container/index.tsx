import { ReactNode, useMemo } from 'react';

interface Props {
  isOpen: boolean;
  children: ReactNode;
}

const Container = ({ isOpen, children }: Props) => {
  const containerClass = useMemo(() => {
    const base =
      'SidebarContainer absolute top-0 left-0 bg-base-200 h-screen transition-width duration-100';
    return isOpen ? `${base} w-64` : `${base} w-12 h-12 md:h-screen`;
  }, [isOpen]);

  return <div className={containerClass}>{children}</div>;
};

export default Container;
