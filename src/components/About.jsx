import { ReactTyped } from "react-typed";

const About = () => {
  return (
    <section id="about" className="min-h-screen px-6 py-20 bg-white ">
        <h3 className="text-3xl font-semibold mb-4 text-center">About Me</h3>
        <center><p className="text-lg max-w-2xl text-center ">
          <ReactTyped
                    strings={[
                      "Motivated and detail-oriented BCA student with a passion for frontend development and user-centered design. Eager to apply my skills in HTML, CSS, JavaScript, React, and modern frameworks like Tailwind CSS to real-world projects. Seeking a junior frontend developer role where I can contribute to innovative solutions and grow within a collaborative tech environment.",
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