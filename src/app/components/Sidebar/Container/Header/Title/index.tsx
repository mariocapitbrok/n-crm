interface Props {
  isOpen: boolean;
}

const Title = ({ isOpen }: Props) => (
  <span className={`${isOpen ? 'block' : 'hidden'} text-xl font-bold`}>
    Admin
  </span>
);

export default Title;
