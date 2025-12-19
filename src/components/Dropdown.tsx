import { NavLink } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

interface DropdownItem {
  id: number;
  label: string;
  to: string;
}

interface DropdownProps {
  linkTo: string;
  title: string;
  items: DropdownItem[];
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isMobile?: boolean;
  closeMenu?: () => void;
}

const Dropdown = ({
  linkTo,
  title,
  items,
  isOpen,
  setIsOpen,
  isMobile = false,
  closeMenu,
}: DropdownProps) => {
  return (
    <>
      {isMobile ? (
        <div>
          <NavLink
            to={linkTo}
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-link flex justify-between items-center w-full"
          >
            {title}
            <MdKeyboardArrowDown
              className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </NavLink>

          {isOpen && (
            <div className="ml-4 border-l border-orange-400 pl-3">
              {items.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.to}
                  onClick={closeMenu}
                  className="block py-2 text-sm hover:text-orange-500"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div
          className="relative"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <NavLink to={linkTo} className="nav-link flex items-center gap-1">
            {title}
            <MdKeyboardArrowDown size={18} />
          </NavLink>

          <div
            className={`absolute top-full left-0 w-60 bg-white shadow-lg rounded-md transition-all
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
          >
            <div className="h-1 bg-orange-500 rounded-t-md" />

            {items.map((item) => (
              <NavLink
                key={item.id}
                to={item.to}
                className="block px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-orange-500"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Dropdown;
