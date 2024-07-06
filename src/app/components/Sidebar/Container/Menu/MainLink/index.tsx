import { FC, useMemo } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface MainLinkProps {
  href: string;
  icon: IconDefinition;
  label: string;
  isOpen: boolean;
}

const MainLink: FC<MainLinkProps> = ({ href, icon, label, isOpen }) => {
  const iconClass = useMemo(() => {
    const base = 'mainlink-icon';
    return isOpen ? `${base} w-4 h-5` : `${base} hidden md:flex md:w-4 md:h-5`;
  }, [isOpen]);

  const labelClass = useMemo(() => {
    const base = 'mainlink-label';
    return isOpen ? `${base} ml-4` : `${base} hidden`;
  }, [isOpen]);

  return (
    <li>
      <Link href={href} legacyBehavior>
        <a className="flex items-center">
          <FontAwesomeIcon icon={icon} className={iconClass} />
          <span className={labelClass}>{label}</span>
        </a>
      </Link>
    </li>
  );
};

export default MainLink;
