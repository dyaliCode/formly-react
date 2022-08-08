import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Nav = () => {
  const router = useRouter();
  const [hidden, setHidden] = useState<boolean>(true);
  const urlParams = router.pathname.split("/");

  return (
    <nav className="bg-indigo-600  border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-indigo-600 ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/">
          <a className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Formly React
            </span>
          </a>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                aria-current={router.pathname == "/" ? "page" : undefined}
              >
                <a
                  className={`block py-2 pr-4 pl-3 text-white rounded md:bg-transparent ${
                    router.pathname == "/"
                      ? "md:text-indigo-600"
                      : "dark:text-gray-400"
                  } md:p-0 dark:text-white`}
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/usage">
                <a
                  className={`block py-2 pr-4 pl-3 text-white rounded md:bg-transparent ${
                    router.pathname == "/usage"
                      ? "md:text-indigo-600"
                      : "dark:text-gray-400"
                  } md:p-0 dark:text-white`}
                >
                  Usage
                </a>
              </Link>
            </li>
            <li>
              <Link href="/alter">
                <a
                  className={`block py-2 pr-4 pl-3 text-white rounded md:bg-transparent ${
                    router.pathname == "/alter"
                      ? "md:text-indigo-600"
                      : "dark:text-gray-400"
                  } md:p-0 dark:text-white`}
                >
                  Alter
                </a>
              </Link>
            </li>
            <li>
              <Link href="/validation">
                <a
                  className={`block py-2 pr-4 pl-3 text-white rounded md:bg-transparent ${
                    router.pathname == "/validation"
                      ? "md:text-indigo-600"
                      : "dark:text-gray-400"
                  } md:p-0 dark:text-white`}
                >
                  Validation
                </a>
              </Link>
            </li>
            <li>
              <Link href="/preprocess">
                <a
                  className={`block py-2 pr-4 pl-3 text-white rounded md:bg-transparent ${
                    router.pathname == "/preprocess"
                      ? "md:text-indigo-600"
                      : "dark:text-gray-400"
                  } md:p-0 dark:text-white`}
                >
                  Preprocess
                </a>
              </Link>
            </li>
            <li>
              <button
                id="mega-menu-full-dropdown-button"
                data-collapse-toggle="mega-menu-full-dropdown"
                className={`flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700
                  ${
                    urlParams.includes("components") || !hidden
                      ? "md:text-indigo-600"
                      : "dark:text-gray-400"
                  }`}
                onClick={() => setHidden(!hidden)}
              >
                Components{" "}
                <svg
                  className="ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* Sub menu */}
      <div
        id="mega-menu-full-dropdown"
        className={`${
          hidden ? "hidden" : null
        } mt-1 bg-gray-800 border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600`}
      >
        <div className="grid py-5 px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white sm:grid-cols-4 md:px-4">
          <ul>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Text</div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Password</div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Email</div>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Number</div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Range</div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">TextArea</div>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Select</div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Checkbox</div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Radio</div>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/components/file">
                <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <div className="font-semibold">File</div>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/components/autocomplete">
                <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <div className="font-semibold">AutoComplete</div>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
