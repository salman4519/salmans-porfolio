import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-flashWhite sm:opacity-[0.97] h-[12vh] sm:h-[10vh] lg:h-[8vh]`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logo}
              alt="logo"
              className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] object-contain"
            />
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-6 md:gap-8 lg:gap-10 xl:gap-14">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? 'text-french' : 'text-eerieBlack'
                } hover:text-taupe text-[16px] sm:text-[18px] md:text-[20px] lg:text-[21px] font-medium font-mova uppercase tracking-[2px] sm:tracking-[3px] cursor-pointer transition-colors duration-300`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          <div className="sm:hidden flex items-center">
            <img
              src={menu}
              alt="menu"
              className="w-[30px] h-[30px] object-contain cursor-pointer"
              onClick={() => setToggle(true)}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {toggle && (
        <div
          className={`fixed inset-0 bg-flashWhite opacity-[0.98] z-10 transition-transform duration-500 ease-in-out ${
            toggle ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex justify-end p-4">
            <img
              src={close}
              alt="close"
              className="w-[24px] h-[24px] object-contain cursor-pointer"
              onClick={() => setToggle(false)}
            />
          </div>
          <ul className="list-none flex flex-col items-start justify-center h-[calc(100vh-4rem)] px-6 sm:px-8 gap-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? 'text-french' : 'text-eerieBlack'
                } text-[32px] sm:text-[40px] font-bold font-arenq uppercase tracking-[1px] cursor-pointer hover:text-taupe transition-colors duration-300`}
                onClick={() => {
                  setToggle(false);
                  setActive(nav.title);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 640px) {
          .nav-links {
            font-size: calc(8vw + 8px); /* Dynamic font size for mobile */
          }
        }
        @media (min-width: 641px) and (max-width: 768px) {
          .nav-links {
            font-size: 18px;
            margin-left: 1rem;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .nav-links {
            font-size: 19px;
            margin-left: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;