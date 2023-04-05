import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "bg-purple-400 px-2 rounded-md py-2 md:text-2xl font-semibold": "px-2 md:px-8 md:text-2xl font-semibold"}>
            {children}
      </NavLink>
    );
};

export default ActiveLink;