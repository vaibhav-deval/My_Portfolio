import pic from "../assets/profile_pic.jpg";
import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen sm:flex items-center justify-around bg-black text-white"
    >
      <div className="text-center space-y-4 absolute  bottom-30 sm:static ">
        <ReactTyped
          strings={["Hi, I am Vaibhav"]}
          showCursor={false}
          typeSpeed={60}
          backSpeed={0}
          className="text-4xl md:text-5xl font-bold"
          backDelay={1000}
          startDelay={500}
        />
        <br />
        <br />
        <ReactTyped
          strings={["Frontend Developer", "React | Tailwind Enthusiast", "Web Developer"]}
          typeSpeed={60}
          backSpeed={40}
          loop
          className="text-2xl text-gray-500"
          backDelay={1000}
          startDelay={500}
        />
        <br />
        <br />
        <p className="text-lg md:text-xl text-gray-400">
          Building awesome web experiences with React and Tailwind
        </p>

        <Link to="about" smooth duration={3000}>
          <button className="text-white bg-green-700 border-0 px-8 py-3 mt-5 rounded-md hover:bg-green-600 transition-colors duration-300">
            Let's Get Started <span className="text-2xl">🢒</span>
          </button>
        </Link>
      </div>
      <div className=" absolute top-50 right-35 left-35 h-auto w-auto   items-center justify-center sm:static">
        <img
          src={pic}
          className="rounded-full w-60 h-auto md:w-64 md:h-64 object-cover"
          alt="Profile"
        />
      </div>
    </section>
  );
};

export default Hero;
