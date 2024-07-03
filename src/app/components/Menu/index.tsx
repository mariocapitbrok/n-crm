import Link from 'next/link';

export default function MenuPage() {
  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/">
          <button className="btn btn-ghost normal-case text-xl">MySite</button>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li tabIndex={0}>
            <Link href="/services">
              <button>
                Services
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 18l-8-8h16z" />
                </svg>
              </button>
            </Link>
            <ul className="p-2 bg-base-100">
              <li>
                <Link href="/service1">Service 1</Link>
              </li>
              <li>
                <Link href="/service2">Service 2</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
