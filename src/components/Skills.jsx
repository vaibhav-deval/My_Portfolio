const Skills = () => {
  return (
    <div className="h-screen flex flex-col items-center bg-amber-200 ">
      <h3 className="text-3xl font-semibold my-10 text-center">Skills</h3>
      <div className="grid md:grid-cols-3 gap-4 mt- space-y-10">
        <div className="max-w-sm bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
          <h3 className="text-lg font-bold">React.js</h3>
          <p>🔥 Used in 10+ projects</p>
        </div>
        <div className="max-w-sm bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
          <h3 className="text-lg font-bold">TailwindCss</h3>
          <p>🔥 Used in 10+ projects</p>
        </div>
        <div className="max-w-sm bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition max-h-21">
          <h3 className="text-lg font-bold">Html, Css And Javascript</h3>
          <p>🔥 Used in 15+ projects</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
