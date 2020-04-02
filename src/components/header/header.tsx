import * as React from 'react';
import Link from 'next/link';
import styles from './header.module.scss';

interface PHeader {
  nav?: {
    url: string,
    name: string,
  }[]
}

const Header: React.FC<PHeader> = ({ nav }) => {
  return <>
    <header className={styles.header}>
        <nav className={styles.nav}>
          <div className="menu__body">
            <ul className={styles.menu}>
              {
                nav?.map((item, index) => <li key={index}>
                <Link href={item.url}>
                  <a className="menu__link">{item.name}</a>
                </Link>
              </li>)
              }
            </ul>
          </div>
        </nav>
    </header>
  </>
}

Header.defaultProps = {
  nav: [
    { name: 'Box shadow', url: '/box-shadow' },
    { name: 'Text shadow', url: '/text-shadow' },
    { name: 'Border', url: '/border' },
    { name: 'Transform', url: '/transform' },
    { name: 'Background', url: '/background' },
    // { name: 'Font', url: '/font' },
    // { name: 'Color', url: '/color' },
  ]
} as Partial<PHeader>;

export default Header;
