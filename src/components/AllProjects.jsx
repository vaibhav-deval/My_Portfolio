import Projects from "./Projects";
const projectsList = [
  {
    title: "Portfolio Website",
    description: "Built with React and Tailwind, deployed on Vercel.",
    imgUrl: "/src/assets/portfolio.png",
    link: "",
  },
  {
    title: "E-Commerce Website",
    description:
      "Developed a responsive multi-page e-commerce site using the MERN stack. Integrated Tailwind CSS for design, Razorpay for payments, and built an admin panel for product management.",
    imgUrl: "src/assets/e-commerce.png",
    link: "",
  },
  {
    title: "Grocery List App",
    description: "Built with HTML, CSS, and JavaScript, deployed on Vercel.",
    imgUrl: "src/assets/grocery.png",
    link: "https://grocery-list-using-javascript.vercel.app/",
  },
  {
    title: "Weather App",
    description: "Built with HTML, CSS, and JavaScript, deployed on Vercel.",
    imgUrl: "src/assets/weather.png",
    link: "https://weather-app-using-js-mu.vercel.app/",
  },
  {
    title: "Tic-Tac-Toe Game",
    description: "Built with HTML, CSS, and JavaScript, deployed on Vercel.",
    imgUrl: "src/assets/tic_tac_toe.png",
    link: "https://tic-tac-toe-using-javascript.vercel.app/",
  },
  {
    title: "Digital Clock app",
    description: "Built with HTML, CSS, and JavaScript, deployed on Vercel.",
    imgUrl: "src/assets/clock.png",
    link: "https://digital-clock-using-javascript.vercel.app/",
  },
  {
    title: "Todo List app",
    description: "Built with HTML, CSS, and JavaScript, deployed on Vercel.",
    imgUrl: "src/assets/todo.png",
    link: "https://todo-list-using-javascript-eight.vercel.app/",
  },
  {
    title: "Real Time Chat App",
    description:
    "Built with html,css, Socket.io and Javascript deployed on Vercel.",
    imgUrl: "src/assets/chat_app.png",
    link: "",
  },
  {
    title: "Image Slider",
    description:
    "Built with html,css, and Javascript deployed on Vercel.",
    imgUrl: "src/assets/image.png",
    link: "",
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
