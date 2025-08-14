import Projects from "./Projects";
const projectsList = [
  {
    title: "Portfolio Website",
    description: "Built with React and Tailwind, deployed on Vercel.",
    imgUrl: "https://res.cloudinary.com/dm5ciytad/image/upload/portfolio_mbh6tb.png",
    link: "https://my-portfolio-vaibhav-devals-projects.vercel.app/",
  },
  {
    title: "E-Commerce Website",
    description:
      "Developed a responsive multi-page e-commerce site using the MERN stack. Integrated Tailwind CSS for design, Razorpay for payments, and built an admin panel for product management.",
    imgUrl: "https://res.cloudinary.com/dm5ciytad/image/upload/e-commerce_lktkix.png",
    link: "https://github.com/vaibhav-deval/E-commerce",
  },
  {
    title: "Travel Expense Tracker",
    description: "A responsive and interactive web application built with React.js and Tailwind CSS to simplify trip expense management.This app allows users to create, edit, delete, and manage multiple trips, while keeping all data saved in localStorage for persistence across sessions.",
    imgUrl: "https://res.cloudinary.com/dm5ciytad/image/upload/v1755190705/Screenshot_2025-08-14_222710_r17rht.png",
    link: "https://vaibhav-projects.netlify.app/",
  },
  {
    title: "Grocery List App",
    description: "Built with HTML, CSS, and JavaScript, deployed on Vercel.",
    imgUrl: "https://res.cloudinary.com/dm5ciytad/image/upload/grocery_t3o2p3.png",
    link: "https://grocery-list-using-javascript.vercel.app/",
  },
  {
    title: "Weather App",
    description: "Built with HTML, CSS, and JavaScript, deployed on Vercel.",
    imgUrl: "https://res.cloudinary.com/dm5ciytad/image/upload/weather_cakjfe.png",
    link: "https://weather-app-using-js-mu.vercel.app/",
  },
  {
    title: "Tic-Tac-Toe Game",
    description: "Built with HTML, CSS, and JavaScript, deployed on Vercel.",
    imgUrl: "https://res.cloudinary.com/dm5ciytad/image/upload/todo_uz3dyn.png",
    link: "https://tic-tac-toe-using-javascript.vercel.app/",
  },
  {
    title: "Digital Clock app",
    description: "Built with HTML, CSS, and JavaScript, deployed on Vercel.",
    imgUrl: "https://res.cloudinary.com/dm5ciytad/image/upload/clock_frzjxo.png",
    link: "https://digital-clock-using-javascript.vercel.app/",
  },
  {
    title: "Todo List app",
    description: "Built with HTML, CSS, and JavaScript, deployed on Vercel.",
    imgUrl: "https://res.cloudinary.com/dm5ciytad/image/upload/todo_uz3dyn.png",
    link: "https://todo-list-using-javascript-eight.vercel.app/",
  },
  {
    title: "Real Time Chat App",
    description:
    "Built with html,css, Socket.io and Javascript deployed on Vercel.",
    imgUrl: "https://res.cloudinary.com/dm5ciytad/image/upload/chat_app_je0mgu.png",
    link: "",
  },
  {
    title: "Image Slider",
    description:
    "Built with html,css, and Javascript deployed on Vercel.",
    imgUrl: "https://res.cloudinary.com/dm5ciytad/image/upload/image_njhjkl.png",
    link: "https://github.com/vaibhav-deval/Image_Slider_Using_JS",
  },
];

const AllProjects = () => {
  return (
    <section id="projects" className="min-h-screen px-6 py-20 bg-gray-50">
      <h3 className="text-3xl font-semibold mb-4">Projects</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Replace with dynamic project cards later */}
        {projectsList.map((project, index) => (
          <Projects
            key={index}
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
