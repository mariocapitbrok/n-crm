interface Props {
  isOpen?: boolean;
}

const Title = ({ isOpen = true }: Props) => (
  <span className={`${isOpen ? 'block' : 'hidden'} text-xl font-bold ml-2`}>
    Admin
  </span>
);

export default Title;
