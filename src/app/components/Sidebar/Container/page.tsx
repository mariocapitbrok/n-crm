'use client';

import { useState } from 'react';
import Container from '.';
import Header from './Header';
import Menu from './Menu';

const Page = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Container isOpen={isOpen}>
      <Header isOpen={isOpen} toogleSidebar={() => setIsOpen(!isOpen)} />
      <Menu isOpen={isOpen} />
    </Container>
  );
};

export default Page;
