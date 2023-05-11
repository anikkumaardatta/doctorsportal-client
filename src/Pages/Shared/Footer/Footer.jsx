import React from "react";
import footerBg from "../../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      aria-label="Site Footer"
      className="bg-base-100"
      style={{
        backgroundImage: `url(${footerBg})`,
      }}
    >
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 rounded-lg bg-secondary p-6 shadow-lg sm:flex-row sm:justify-between">
          <strong className="text-xl text-white sm:text-xl">
          Your New Smile Starts Here!
          </strong>

          <a
            className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-emerald-500 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
            href="/"
          >
            <span className="text-sm font-medium"> Let's Get Started </span>

            <svg
              className="h-5 w-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">About Us</p>

            <nav aria-label="Footer About Nav" className="mt-8">
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Company History
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Meet the Team
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Employee Handbook
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Our Services</p>

            <nav aria-label="Footer Services Nav" className="mt-8">
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Web Development
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Web Design
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Marketing
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Google Ads
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Resources</p>

            <nav aria-label="Footer Resources Nav" className="mt-8">
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Online Guides
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Conference Notes
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Forum
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Downloads
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Upcoming Events
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Helpful Links</p>

            <nav aria-label="Footer Helpful Nav" className="mt-8">
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    FAQs
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-16">
          <div className="mt-16 sm:flex sm:items-center sm:justify-between">
            <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-right mx-auto">
              
            {/* <!-- copyright --> */}
                <div className="text-center">
                    <div className="">Copyright © 2021-2023 <br/>
                        Design by <a className="text-purple-600 font-semibold underline" href="https://www.programming-hero.com/">Programming Hero</a> <br />
                        Developed by <a className="text-primary font-semibold underline" href="https://www.linkedin.com/in/anik-datta/">Anik K. Datta</a></div>
                </div>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
