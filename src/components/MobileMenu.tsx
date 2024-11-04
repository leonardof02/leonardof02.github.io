import React from "react";

export default function MobileMenu() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <React.Fragment>
      <button onClick={() => setMenuOpen(true)} className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-menu"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-45 z-10 backdrop-blur-md">
          <div className="flex flex-col gap-5 py-4 px-10 w-full h-full">
            <div className="flex justify-between items-center">
              <a href="/">
                <h1 className="font-title text-3xl font-extrabold">
                  Leodev Portfolio
                </h1>
              </a>
              <button onClick={() => setMenuOpen(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-menu"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </div>
            <hr className="border-default w-full" />
            <nav className="py-6 gap-10 flex-col font-title text-xl font-bold flex text-4xl">
              <a onClick={() => setMenuOpen(false)} href="/projects">
                Projects
              </a>
              <a onClick={() => setMenuOpen(false)} href="/blog">
                Blog
              </a>
              <a onClick={() => setMenuOpen(false)} href="">
                About
              </a>
              <a onClick={() => setMenuOpen(false)} href="/contact">
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
