import React from "react";
import Link from "next/link";
import Router from "next/router";
import Cookies from "js-cookie";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectActiveTab, setActiveTab } from "../slices/main/mainSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const active = useAppSelector(selectActiveTab);
  const handleLogout = () => {
    Cookies.remove("token");
    Router.push("/login");
  };
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 fixed w-full top-0 z-50">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/">
            <div className="flex items-center cursor-pointer select-none">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Bus App Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Bus App
              </span>
            </div>
          </Link>

          <div
            className="flex items-center lg:order-2 cursor-pointer select-none"
            onClick={() => handleLogout()}
          >
            <div className="text-gray-800  dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
              Çıkış Yap
            </div>
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link href="/defineBus">
                  <div
                    onClick={() => dispatch(setActiveTab("defineBus"))}
                    className={`block py-2 pr-4 pl-3 ${
                      active === "defineBus"
                        ? "dark:text-white"
                        : "dark:text-gray-400"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer select-none`}
                  >
                    Otobüs Tanımla
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/defineVoyage">
                  <div
                    onClick={() => dispatch(setActiveTab("defineVoyage"))}
                    className={`block py-2 pr-4 pl-3 ${
                      active === "defineVoyage"
                        ? "dark:text-white"
                        : "dark:text-gray-400"
                    } text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer select-none`}
                  >
                    Sefer Tanımla
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/buyTicket">
                  <div
                    onClick={() => dispatch(setActiveTab("buyTicket"))}
                    className={`block py-2 pr-4 pl-3 ${
                      active === "buyTicket"
                        ? "dark:text-white"
                        : "dark:text-gray-400"
                    } text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer select-none`}
                  >
                    Bilet Al
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
