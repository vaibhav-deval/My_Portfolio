import { ReactTyped } from "react-typed";

const About = () => {
  return (
    <section id="about" className="min-h-screen px-6 py-20 bg-white ">
        <h3 className="text-3xl font-semibold mb-4 text-center">About Me</h3>
        <center><p className="text-lg max-w-2xl text-center ">
          <ReactTyped
                    strings={[
                      "A detail-oriented and passionate Frontend Developer with a BCA degree and hands-on experience in building clean, responsive, and interactive user interfaces. Proficient in React.js, JavaScript, and Tailwind CSS and enthusiastic about contributing to dynamic web development teams. Open to frontend or full-stack roles that foster learning and collaboration. ",
                    ]}
                    typeSpeed={20}
                    backSpeed={0}
                    
                    startWhenVisible
                    
                    backDelay={1000}
                    startDelay={0}
                  />
          
        </p></center>
      </section>
  )
}

export default About
