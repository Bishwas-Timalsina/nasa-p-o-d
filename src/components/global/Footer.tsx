import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm mb-2 sm:mb-0">NASA-Picture of the Day</div>
          <nav className="flex space-x-4 mb-2 sm:mb-0">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Privacy
            </a>
          </nav>
          <div className="flex space-x-4">
            <div className="text-sm mb-2 sm:mb-0">
              &copy; {currentYear}{" "}
              <a href="https://bishwastimalsina.com.np">Bishwas Timalsina</a>
            </div>
            <a
              href="https://github.com/Bishwas-Timalsina"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>

            <a
              href="https://np.linkedin.com/in/bishwas-timalsina-037b15284"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
