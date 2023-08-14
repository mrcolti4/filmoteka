import { NavLink } from 'react-router-dom';
import React from 'react';

import styled from './Header.module.css';
import clsx from 'clsx';

export const Header = () => {
  return (
    <header className={clsx(styled.header)}>
      <div className="container">
        <ul className={clsx(styled.header_menu)}>
          <li>
            <NavLink className={clsx(styled.header_link)} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={clsx(styled.header_link)} to="movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
