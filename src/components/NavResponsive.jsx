import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Menu from "./Menu";

const NavResponsive = () => {
  const [isOpen, setIsOpen] = useState(false);
  const effectBoxRef = useRef(null);
  const linesRef = useRef([]);

  useEffect(() => {
    if (isOpen) {
      gsap.from(effectBoxRef.current, {
        x: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
      });

      linesRef.current.forEach((line, index) => {
        gsap.from(line, {
          x: "100%",
          opacity: 0,
          duration: 0.5,
          delay: 0.1 * index,
          ease: "power4.out",
        });
      });
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.7 6.7L17.3 17.3M6.7 17.3L17.3 6.7"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 18H20V20H4V18Z"
                    fill="white"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div
            ref={effectBoxRef}
            className="effectBox md:hidden fixed w-screen h-screen bg-black top-0 left-0 z-50"
          >
            <div className="flex justify-end">
              <button
                onClick={toggleMenu}
                className="text-white mr-4 mt-4 focus:outline-none"
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.7 6.7L17.3 17.3M6.7 17.3L17.3 6.7"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
            <Menu linesRef={linesRef} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavResponsive;
