// Menu.tsx
import MainLink from './MainLink';
import {
  faTachometerAlt,
  faNewspaper,
  faPhotoVideo,
  faFileAlt,
  faComments,
  faBrush,
  faPlug,
  faUsers,
  faTools,
  faCog,
} from '@fortawesome/free-solid-svg-icons';

interface MenuProps {
  isOpen: boolean;
}

const Menu = ({ isOpen }: MenuProps) => {
  return (
    <ul className="menu p-4 w-full">
      <MainLink
        href="/dashboard"
        icon={faTachometerAlt}
        label="Dashboard"
        isOpen={isOpen}
      />
      <MainLink
        href="/posts"
        icon={faNewspaper}
        label="Posts"
        isOpen={isOpen}
      />
      <MainLink
        href="/media"
        icon={faPhotoVideo}
        label="Media"
        isOpen={isOpen}
      />
      <MainLink href="/pages" icon={faFileAlt} label="Pages" isOpen={isOpen} />
      <MainLink
        href="/comments"
        icon={faComments}
        label="Comments"
        isOpen={isOpen}
      />
      <MainLink
        href="/appearance"
        icon={faBrush}
        label="Appearance"
        isOpen={isOpen}
      />
      <MainLink href="/plugins" icon={faPlug} label="Plugins" isOpen={isOpen} />
      <MainLink href="/users" icon={faUsers} label="Users" isOpen={isOpen} />
      <MainLink href="/tools" icon={faTools} label="Tools" isOpen={isOpen} />
      <MainLink
        href="/settings"
        icon={faCog}
        label="Settings"
        isOpen={isOpen}
      />
    </ul>
  );
};

export default Menu;
