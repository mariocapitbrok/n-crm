'use client';

import Header from '.';
import { useState } from 'react';

export default function Page() {
  const [isOpen, setIsOpen] = useState(true);

  return <Header isOpen={isOpen} toogleSidebar={() => setIsOpen(!isOpen)} />;
}
