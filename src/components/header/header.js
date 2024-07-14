"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { MyLink } from "../common/button";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const navigation = [
  { name: "Home", href: "/", current: true },
  {
    name: "Services",
    href: "/services",
    current: false,
    child: [
      {
        name: "Visa Consulting Services",
        href: "/services/visa-consulting",
      },
      {
        name: "IT Consulting Services",
        href: "/services/it-consulting",
      },
      {
        name: "Education Consulting Services",
        href: "/services/education-consulting",
      },
      {
        name: "Career Consulting Services",
        href: "/services/career-consulting",
      },
      {
        name: "Medical Consulting Services",
        href: "/services/medical-consulting",
      },
    ],
  },
  { name: "About", href: "/about", current: false },
  // { name: "Projects", href: "#", current: false },
  // { name: "Plans & Pricing", href: "#", current: false },
  // { name: "Tools & Tips", href: "#", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-primary">
      {({ open }) => (
        <>
          <div className=" max-w-7xl md:px-11 sm:px-8 px-4 mx-auto">
            <div className="relative flex h-[74px] items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  {/* <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  /> */}
                  <Link href="/">
                    <h1 className="uppercase text-xl text-white">
                      James Consulting
                    </h1>
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex lg:space-x-4 justify-end">
                    {navigation.map((item, id) => (
                      <>
                        {item?.child?.length > 0 ? (
                          <>
                            <Menu key={id} as="div" className="relative ">
                              {({ open }) => (
                                <>
                                  <MenuButton className="relative text-white  hover:text-active rounded-md px-3 py-2 text-sm font-kode ">
                                    {/* <span className="absolute -inset-1.5" /> */}
                                    <div className="flex gap-1 items-center">
                                      <span className="">{item?.name}</span>

                                      <ChevronDownIcon
                                        className={`${
                                          open
                                            ? "transition-transform -rotate-180 duration-500"
                                            : "transition-transform  duration-500"
                                        } font-extrabold h-5 w-3 `}
                                      />
                                    </div>
                                  </MenuButton>

                                  <MenuItems
                                    transition
                                    className="absolute divide-y-2 right-0 z-10 mt-2 w-60 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                  >
                                    {item?.child?.map((ch, i) => {
                                      return (
                                        <MenuItem key={i}>
                                          {({ focus }) => (
                                            <Link
                                              href={ch?.href}
                                              className={classNames(
                                                focus
                                                  ? " text-theme font-medium"
                                                  : "text-theme  hover:text-active",
                                                " px-3 py-2 text-sm font-kode block"
                                              )}
                                            >
                                              {ch?.name}
                                            </Link>
                                          )}
                                        </MenuItem>
                                      );
                                    })}
                                  </MenuItems>
                                </>
                              )}
                            </Menu>
                          </>
                        ) : (
                          <MyLink
                            key={item.name}
                            href={item.href}
                            // className={classNames(
                            //   item.current
                            //     ? " text-active"
                            //     : "text-white  hover:text-active",
                            //   "rounded-md px-3 py-2 text-sm "
                            // )}
                            // aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </MyLink>
                        )}
                      </>
                    ))}
                  </div>
                </div>
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative text-white flex items-center gap-3 rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-active focus:ring-offset-2 focus:ring-offset-primary">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <Image
                        width={50}
                        height={50}
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <span className=" hidden md:block">Log In</span>
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <MenuItem>
                      {({ focus }) => (
                        <a
                          href="#"
                          className={classNames(
                            focus ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Your Profile
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ focus }) => (
                        <a
                          href="#"
                          className={classNames(
                            focus ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Settings
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ focus }) => (
                        <a
                          href="#"
                          className={classNames(
                            focus ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Sign out
                        </a>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}

          <MobileMenu data={navigation} />
        </>
      )}
    </Disclosure>
  );
}
