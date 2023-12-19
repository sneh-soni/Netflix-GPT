import React from "react";
import { useState } from "react";

const Header = () => {
  const [status, setStatus] = useState(false);
  const [language, setLanguage] = useState("English");

  return (
    <div className="absolute mx-32 h-1/6 w-3/4 flex justify-between items-center">
      <div className="h-4/5">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="background"
          className="h-full"
        />
      </div>
      <div className="flex gap-8">
        <div class="relative inline-block text-left">
          <button
            type="button"
            class="flex gap-3 items-center px-6 border border-white py-1 w-36 bg-black/50 rounded-md font-medium text-white"
            onClick={() => {
              status ? setStatus(false) : setStatus(true);
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="default-ltr-cache-4z3qvp e1svuwfo1"
              data-name="Languages"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                fill="currentColor"
              ></path>
            </svg>
            {language}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="default-ltr-cache-4z3qvp e1svuwfo1"
              data-name="CaretDown"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          {status ? (
            <div class="origin-top-right absolute right-0 w-full bg-white">
              <div
                class="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <a
                  onClick={() => {
                    setLanguage("English");
                    setStatus(false);
                  }}
                  class=" h-1/2 block px-4 py-2 text-sm text-gray-700 hover:bg-blue-600 hover:text-white"
                  role="menuitem"
                >
                  English
                </a>
                <a
                  onClick={() => {
                    setLanguage("Hindi");
                    setStatus(false);
                  }}
                  class=" h-1/2  block px-4 py-2 text-sm text-gray-700 hover:bg-blue-600 hover:text-white"
                  role="menuitem"
                >
                  Hindi
                </a>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <button className="px-3 py-2 bg-red-600 text-white font-bold rounded-md text-sm hover:bg-red-700">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
