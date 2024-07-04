'use client';

import Toggle from '.';
import { useEffect, useState } from 'react';

function Page() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen === true ? 'Open Sidebar' : 'Close Sidebar');
  }, [isOpen]);

  return (
    <>
      <Toggle toggleSidebar={() => setIsOpen(!isOpen)} />
    </>
  );
}

export default Page;
