import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({ weight: "400", subsets: ["latin"] });

// Initial navigation array
const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "About", href: "/about", current: false },
  { href: "/", current: false, img: "/newjacksb.png" },

  { name: "Menu", href: "/menu", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const router = useRouter();

  // Update navigation array based on the current route
  const updatedNavigation = navigation.map((item) => ({
    ...item,
    current: item.href === router.asPath,
  }));

  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <div className=" ">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-16">
            <div className="relative flex h-16 items-center justify-center">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-evenly justify-center p-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center ">
                <div className="flex-shrink-0 flex items-center"></div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4 justify-center items-center">
                    {updatedNavigation.map((item) => (
                      <Link key={item.name} href={item.href} passHref>
                        <div className={merriweather.className}>
                          <div
                            className={classNames(
                              item.img ? "text-gray-500 cursor-default" : item.current ? "bg-gray-900 text-white" : "hover:bg-gray-700 hover:text-white",
                              "px-3 py-2 rounded-md text-2xl font-medium flex items-center cursor-pointer mx-12"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.img && (
                              <img
                                src={item.img}
                                alt={item.name}
                                className="mr-2 h-auto lg:w-48"
                              />
                            )}
                            {!item.img && item.name}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {updatedNavigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.img ? "text-gray-500" : item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium flex items-center"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.img && (
                    <img
                      src={item.img}
                      alt={item.name}
                      className="mr-2 h-36 w-40"
                    />
                  )}
                  {!item.img && item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}