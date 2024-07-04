import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface ToggleProps {
  toggleSidebar: () => void;
}

const Toggle = ({ toggleSidebar }: ToggleProps) => (
  <button onClick={toggleSidebar} className="btn btn-ghost">
    <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
  </button>
);

export default Toggle;
