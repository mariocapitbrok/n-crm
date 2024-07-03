'use client'; // Add this line at the top

import { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`flex ${
        isOpen ? 'w-64' : 'w-20'
      } bg-base-200 h-screen transition-width duration-300`}
    >
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between p-4">
          <button onClick={() => setIsOpen(!isOpen)} className="btn btn-ghost">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <span className={`${isOpen ? 'block' : 'hidden'} text-xl font-bold`}>
            Admin
          </span>
        </div>
        <ul className="menu p-4 w-full">
          <li>
            <Link href="/dashboard" legacyBehavior>
              <a>Dashboard</a>
            </Link>
          </li>
          <li>
            <Link href="/posts" legacyBehavior>
              <a>Posts</a>
            </Link>
          </li>
          <li>
            <Link href="/media" legacyBehavior>
              <a>Media</a>
            </Link>
          </li>
          <li>
            <Link href="/pages" legacyBehavior>
              <a>Pages</a>
            </Link>
          </li>
          <li>
            <Link href="/comments" legacyBehavior>
              <a>Comments</a>
            </Link>
          </li>
          <li>
            <Link href="/appearance" legacyBehavior>
              <a>Appearance</a>
            </Link>
          </li>
          <li>
            <Link href="/plugins" legacyBehavior>
              <a>Plugins</a>
            </Link>
          </li>
          <li>
            <Link href="/users" legacyBehavior>
              <a>Users</a>
            </Link>
          </li>
          <li>
            <Link href="/tools" legacyBehavior>
              <a>Tools</a>
            </Link>
          </li>
          <li>
            <Link href="/settings" legacyBehavior>
              <a>Settings</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
