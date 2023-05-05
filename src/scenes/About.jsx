import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const downloadResume = () => {
  window.open("https://www.youtube.com/", "_blank");
};

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="about"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center">
        {isAboveLarge ? (
          <div
          >
            <img
              alt="profile"
              className="hover:filter hover:scale-110 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              src="assets/facehex.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src="assets/facehex.png"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            About {""}
            <span
              className="xs:relative xs:text-purple xs:font-semibold z-20 
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              Me
            </span>
          </p>

          <p className="mt-10 mb-7 text-s text-center md:text-start">
          Hello! My name is Grant MacMillan and I'm an aspiring game developer! I have recently graduated from Centennial College with an advanced diploma in Game Programming. I specialize in Unity and C#. I also have experience with Unreal Engine and C++. I have worked on a variety of projects including a tower defence game, a 2D platformer, multiple first person shooter games, a bartender simulation game and many more!
          </p>

          <p className="mt-10 mb-7 text-s text-center md:text-start">
          In addition to my work in game development, I also have experience working with computer hardware. I enjoy building computers in my free time and troubleshooting software. This experience has given me a strong foundation in computer systems, which has been beneficial in my game development work.
          </p>

          <p className="mt-10 mb-7 text-s text-center md:text-start">
          When I'm not working on computers, I enjoy playing video games, golfing and fishing. 
          </p>
        </motion.div>

        
      </div>
    </section>
  );
};

export default Landing;
