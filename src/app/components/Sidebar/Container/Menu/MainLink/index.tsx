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
  const md = `md:flex md:w-4 md:h-5`;

  const iconStyles = function () {
    const name = 'mainlink-icon';
    const open = `${name} w-4 h-5`;
    const closed = `${name} hidden ${md}`;
    const rest = ``;

    return `${isOpen ? open : closed} ${rest}`;
  };

  const labelStyles = function () {
    const name = 'mainlink-label';
    const open = `${name} ml-4 `;
    const closed = `${name} hidden`;
    const rest = ``;

    return `${isOpen ? open : closed} ${rest}`;
  };

  return (
    <li>
      <Link href={href} legacyBehavior>
        <a className="flex items-center">
          <FontAwesomeIcon icon={icon} className={iconStyles()} />
          <span className={labelStyles()}>{label}</span>
        </a>
      </Link>
    </li>
  );
};

export default MainLink;
