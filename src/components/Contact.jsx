import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {

  const downloadPDF = () => {
  fetch("/resume.pdf")
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Resume.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    })
    .catch((error) => console.error("Error downloading PDF:", error));
};


  return (
    <section id="contact" className="min-h-screen px-6 py-20 bg-white">
      <h3 className="text-3xl font-semibold mb-4">Contact Me</h3>
      <div className="flex space-x-5 items-center py-10 m-5 max-h-1">
        <a
          href="https://github.com/vaibhav-deval"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            size={30}
            className="hover:size-10 transition-size duration-500"
          />
        </a>
        <a
          href="https://linkedin.com/in/vaibhavdeval004"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            size={30}
            className="hover:size-10 transition-size duration-500"
          />
        </a>
        <a
          href="https://x.com/vaibhavdeval004"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter
            size={30}
            className="hover:size-10 transition-size duration-500"
          />
        </a>
      </div>
      <p className="mt-3">Email: vaibhavdeval004@gmail.com</p>
      <div className="text-white inline-block bg-green-700 border-0 px-8 py-3 mt-5 rounded-md hover:bg-green-600 transition-colors duration-300">
        <button onClick={downloadPDF}>Download Resume</button>

      </div>
    </section>
  );
};

export default Contact;
