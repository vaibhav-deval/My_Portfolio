import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaTwitter, FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <nav
        className={`bg-[#1b1b1b] fixed w-full py-3 sm:hidden z-50 transition-transform duration-300 ease-in-out transform ${
          visible ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {visible ? (
          ""
        ) : (
          
          <FaBars
            size={24}
            className="text-white cursor-pointer ml-5"
            onClick={() => setVisible(true)}
          />
          
        )}
      </nav>
      <div
        className={`fixed top-0 left-0 h-full bg-black text-white w-64 border-r-2 border-gray-700 flex flex-col justify-center items-center space-y-6 transition-transform duration-300 ease-in-out transform ${
          visible ? "translate-x-0" : "-translate-x-full"
        } sm:hidden z-50`}
      >
        <FaTimes
          size={24}
          className="absolute top-5 right-5 cursor-pointer hover:text-gray-300"
          onClick={() => setVisible(false)}
        />
        <Link
          to="home"
          smooth
          duration={500}
          className=" p-1 cursor-pointer border-b-2"
          onClick={() => setVisible(false)}
        >
          Home
        </Link>
        <Link
          to="about"
          smooth
          duration={500}
          className=" p-1 cursor-pointer border-b-2"
          onClick={() => setVisible(false)}
        >
          About
        </Link>
        <Link
          to="projects"
          smooth
          duration={500}
          className=" p-1 cursor-pointer border-b-2"
          onClick={() => setVisible(false)}
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth
          duration={500}
          className=" p-1 cursor-pointer border-b-2"
          onClick={() => setVisible(false)}
        >
          Contact
        </Link>
        <a
          href="https://github.com/vaibhav-deval"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            size={30}
            className="hover:text-white transition-colors duration-300"
          />
        </a>
        <a
          href="https://linkedin.com/in/vaibhavdeval004"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            size={30}
            className="hover:text-white transition-colors duration-300"
          />
        </a>
        <a
          href="https://x.com/vaibhavdeval004"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter
            size={30}
            className="hover:text-white transition-colors duration-300"
          />
        </a>
      </div>

      <nav className="hidden sm:flex items-center justify-center fixed top-0 left-15 right-15 h-16 bg-[#1B1B1B] text-[#9C9C9C] shadow-md shadow-amber-200/20 rounded-b-2xl z-50">
        <div className="flex items-center w-[90%] justify-between max-w-7xl mx-auto  ">
          <div className="space-x-9">
            <Link
              to="home"
              smooth
              duration={500}
              className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth
              duration={500}
              className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="projects"
              smooth
              duration={500}
              className="cursor-pointer hover:text-blue-500 transition-colors duration-300" 
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
          <div className=" flex justify-center  space-x-6">
            <a
              href="https://github.com/vaibhav-deval"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={30}
                className="hover:text-white transition-colors duration-300"
              />
            </a>
            <a
              href="https://linkedin.com/in/vaibhavdeval004"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={30}
                className="hover:text-white transition-colors duration-300"
              />
            </a>
            <a
              href="https://x.com/vaibhavdeval004"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                size={30}
                className="hover:text-white transition-colors duration-300"
              />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
