
const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-6 py-20 bg-gray-50">
      <h3 className="text-3xl font-semibold mb-4">Projects</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Replace with dynamic project cards later */}
        <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer">
          <h4 className="text-xl font-bold">Portfolio Website</h4>
          <p>Built with React and Tailwind, deployed on Vercel.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer">
          <h4 className="text-xl font-bold">E-Commerce Website</h4>
          <p>
            Developed a responsive multi-page e-commerce site using the MERN
            stack. Integrated Tailwind CSS for design, Razorpay for payments,
            and built an admin panel for product management.{" "}
          </p>
        </div>
        <a href="https://grocery-list-using-javascript.vercel.app/" target="_blank">
          <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer">
            <h4 className="text-xl font-bold">Grocery list app</h4>
            <p>Built with html,css and Javascript deployed on Vercel.</p>
          </div>
        </a>
        <a href="https://weather-app-using-js-mu.vercel.app/" target="_blank">
          <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer">
            <h4 className="text-xl font-bold">Weather app</h4>
            <p>Built with html,css and Javascript deployed on Vercel.</p>
          </div>
        </a>
        <a href="https://tic-tac-toe-using-javascript.vercel.app/" target="_blank">
          <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer">
            <h4 className="text-xl font-bold">Tic-Tac-Toe Game</h4>
            <p>Built with html,css and Javascript deployed on Vercel.</p>
          </div>
        </a>
        <a href="https://digital-clock-using-javascript.vercel.app/" target="_blank">
          <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer">
            <h4 className="text-xl font-bold">Digital Clock app</h4>
            <p>Built with html,css and Javascript deployed on Vercel.</p>
          </div>
        </a>
        <a href="https://calc-using-javascript.vercel.app/" target="_blank">
          <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer">
            <h4 className="text-xl font-bold">Calculator app</h4>
            <p>Built with html,css and Javascript deployed on Vercel.</p>
          </div>
        </a>
        <a href="https://todo-list-using-javascript-eight.vercel.app/" target="_blank">
          <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer">
            <h4 className="text-xl font-bold">Todo List app</h4>
            <p>Built with html,css and Javascript deployed on Vercel.</p>
          </div>
        </a>
        <a href="" target="_blank">
          <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer">
            <h4 className="text-xl font-bold">Real Time Chat App</h4>
            <p>Built with html,css, Socket.io and Javascript deployed on Vercel.</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
