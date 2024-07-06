import { ReactNode } from 'react';

interface Props {
  isOpen: boolean;
  children: ReactNode;
}

const Container = ({ isOpen, children }: Props) => {
  const md = `h-screen`;

  const styles = function () {
    const name = 'SidebarContainer';
    const open = `${name} absolute top-0 left-0 w-64`;
    const closed = `${name} w-12 h-12 ${md}`;
    const rest = `bg-base-200 h-screen transition-width duration-300`;

    return `${isOpen ? open : closed} ${rest}`;
  };

  return <div className={styles()}>{children}</div>;
};

export default Container;
