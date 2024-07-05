// Menu.tsx
import MainLink from './MainLink';
import {
  faTachometerAlt, // Dashboard
  faBullhorn, // Marketing
  faChartLine, // Sales
  faBoxes, // Inventory
  faLifeRing, // Support
  faProjectDiagram, // Projects
  faTools, // Tools
  faEnvelope, // Mail Manager
  faFileAlt, // Documents
  faStore, // Extension Store
  faCog, // Settings
} from '@fortawesome/free-solid-svg-icons';

interface MenuProps {
  isOpen: boolean;
}

const Menu = ({ isOpen }: MenuProps) => {
  return (
    <ul className="menu p-0 w-full">
      <MainLink
        href="/dashboard"
        icon={faTachometerAlt}
        label="Dashboard"
        isOpen={isOpen}
      />
      <MainLink
        href="/marketing"
        icon={faBullhorn}
        label="Marketing"
        isOpen={isOpen}
      />
      <MainLink
        href="/sales"
        icon={faChartLine}
        label="Sales"
        isOpen={isOpen}
      />
      <MainLink
        href="/inventory"
        icon={faBoxes}
        label="Inventory"
        isOpen={isOpen}
      />
      <MainLink
        href="/support"
        icon={faLifeRing}
        label="Support"
        isOpen={isOpen}
      />
      <MainLink
        href="/projects"
        icon={faProjectDiagram}
        label="Projects"
        isOpen={isOpen}
      />
      <MainLink href="/tools" icon={faTools} label="Tools" isOpen={isOpen} />
      <hr className="my-2 border-t border-gray-300" />
      <MainLink
        href="/mail-manager"
        icon={faEnvelope}
        label="Mail Manager"
        isOpen={isOpen}
      />
      <MainLink
        href="/documents"
        icon={faFileAlt}
        label="Documents"
        isOpen={isOpen}
      />
      <MainLink
        href="/extension-store"
        icon={faStore}
        label="Extension Store"
        isOpen={isOpen}
      />
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
