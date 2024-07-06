// components/MainLink.tsx
import { FC } from 'react';
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
  const md = `flex w-4 h-5`;

  return (
    <li>
      <Link href={href} legacyBehavior>
        <a className="flex items-center">
          <FontAwesomeIcon
            icon={icon}
            className={`${isOpen ? 'w-4 h-5' : `hidden ${md}`}`}
          />
          <span className={`${isOpen ? 'ml-4' : 'hidden'}`}>{label}</span>
        </a>
      </Link>
    </li>
  );
};

export default MainLink;
