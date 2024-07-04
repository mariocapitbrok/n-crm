'use client';

import { useState } from 'react';
import Menu from './Container/Menu';
import Container from './Container';
import Header from './Container/Header';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Container isOpen={isOpen}>
      <Header isOpen={isOpen} toogleSidebar={() => setIsOpen(!isOpen)} />
      <Menu isOpen={isOpen} />
    </Container>
  );
};

export default Sidebar;
