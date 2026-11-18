"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './SiteHeader.module.scss';

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
];

// Client component only so it can read the URL and mark the current page.
export default function NavLinks() {
  const pathname = usePathname().replace(/\/$/, "") || "/";

  return (
    <ul className={styles.navList}>
      {links.map(({ href, label }) => (
        <li key={href}>
          <Link href={href} aria-current={pathname === href ? "page" : undefined}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
