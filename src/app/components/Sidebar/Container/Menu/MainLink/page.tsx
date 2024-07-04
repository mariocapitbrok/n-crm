'use client';

import MainLink from '.';
import { useState } from 'react';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Page() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <ul>
        <MainLink
          href="/dashboard"
          icon={faTachometerAlt}
          label="Dashboard"
          isOpen={isOpen}
        />
      </ul>
    </>
  );
}
