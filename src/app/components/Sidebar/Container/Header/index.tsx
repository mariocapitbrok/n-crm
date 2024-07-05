import Title from './Title';
import Toggle from './Toggle';

interface Props {
  isOpen: boolean;
  toogleSidebar: () => void;
}

const Header = ({ isOpen, toogleSidebar }: Props) => (
  <div className="flex items-center justify-start ">
    <Toggle toggleSidebar={toogleSidebar} />
    <Title isOpen={isOpen} />
  </div>
);

export default Header;
