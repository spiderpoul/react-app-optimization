'use client'

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cx from 'classnames'

import { NAV_ITEMS } from "../../../shared/constants";

import styles from "./Nav.module.scss";

const Nav: React.FC<{}> = () => {
  const pathname = usePathname();
  return (
    <div className={styles.NavContainer}>
      {NAV_ITEMS.map(({ title, to }) => (
        <Link
          key={to}
          className={cx(pathname === to && "active", styles.NavItem)}
          href={to}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
