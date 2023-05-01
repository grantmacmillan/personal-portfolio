import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const handleProject1DemoClicked = () => {
  window.open("https://www.youtube.com/", "_blank");
};
const handleProject1CodeClicked = () => {
  window.open("https://github.com/marcusngooi/COMP305-001-Game-Project", "_blank");
};

const handleProject2DemoClicked = () => {
  window.open("https://www.youtube.com/", "_blank");
};
const handleProject2CodeClicked = () => {
  window.open("https://github.com/grantmacmillan/COMP396_Project", "_blank");
};

const handleProject3DemoClicked = () => {
  window.open("https://www.youtube.com/", "_blank");
};
const handleProject3CodeClicked = () => {
  window.open("https://github.com/Ben-Coombes/COMP394_ShapeSurvival", "_blank");
};

const handleProject4DemoClicked = () => {
  window.open("https://www.youtube.com/", "_blank");
};
const handleProject4CodeClicked = () => {
  window.open("https://github.com/grantmacmillan", "_blank");
};

const handleProject5DemoClicked = () => {
  window.open("https://www.youtube.com/", "_blank");
};
const handleProject5CodeClicked = () => {
  window.open("https://github.com/Ben-Coombes/Rhythm-Road/tree/main", "_blank");
};

const handleProject6DemoClicked = () => {
  window.open("https://www.youtube.com/", "_blank");
};
const handleProject6CodeClicked = () => {
  window.open("https://github.com/CCGPProjects2020-2023/served-up", "_blank");
};


const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project1 = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
        Origins’ Fall is a 2D platformer created by God Squad Studios in 2021. I took the role of Programming Lead during this project's development. 

        </p>
        <br></br>
        <div style={{ whiteSpace: "nowrap" }}>
  <button
    className="bg-yellow text-deep-blue rounded-sm py-3 px-3 font-semibold
    hover:bg-blue hover:text-white transition duration-500"
    onClick={handleProject1DemoClicked}
    href="https://www.youtube.com/"
    style={{ display: "inline-block" }}
  >
    Live Demo 
  </button>

  <button
    className="bg-yellow text-deep-blue rounded-sm py-3 px-8 font-semibold
    hover:bg-blue hover:text-white transition duration-500"
    onClick={handleProject1CodeClicked}
    href="https://www.youtube.com/"
    style={{ display: "inline-block", marginLeft: "16px" }}
  >
    Code
  </button>
</div>

      </div>
      <img src={`../assets/originsfallcrop.png`} alt={projectTitle} />

      
    </motion.div>
  );
};

const Project2 = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
        Sneak is a 3D First Person Shooter, made with Unity URP and the new Unity input system. Sneak was created by my colleague Ben and I in fall of 2022.
        </p>
        <br></br>
        <div style={{ whiteSpace: "nowrap" }}>
  <button
    className="bg-yellow text-deep-blue rounded-sm py-3 px-3 font-semibold
    hover:bg-blue hover:text-white transition duration-500"
    onClick={handleProject2DemoClicked}
    href="https://www.youtube.com/"
    style={{ display: "inline-block" }}
  >
    Live Demo 
  </button>

  <button
    className="bg-yellow text-deep-blue rounded-sm py-3 px-8 font-semibold
    hover:bg-blue hover:text-white transition duration-500"
    onClick={handleProject2CodeClicked}
    href="https://www.youtube.com/"
    style={{ display: "inline-block", marginLeft: "16px" }}
  >
    Code
  </button>
</div>

      </div>
      <img src={`../assets/sneakcrop5.png`} alt={projectTitle} />

      
    </motion.div>
  );
};

const Project3 = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
        Shape Survival is a 3D shoot 'em up arcade survival game, with rogue-like aspects at its core. My colleague Ben and I created this game in Unity, using the new Unity input system.
        </p>
        <br></br>
        <div style={{ whiteSpace: "nowrap" }}>
  <button
    className="bg-yellow text-deep-blue rounded-sm py-3 px-3 font-semibold
    hover:bg-blue hover:text-white transition duration-500"
    onClick={handleProject3DemoClicked}
    href="https://www.youtube.com/"
    style={{ display: "inline-block" }}
  >
    Live Demo 
  </button>

  <button
    className="bg-yellow text-deep-blue rounded-sm py-3 px-8 font-semibold
    hover:bg-blue hover:text-white transition duration-500"
    onClick={handleProject3CodeClicked}
    href="https://www.youtube.com/"
    style={{ display: "inline-block", marginLeft: "16px" }}
  >
    Code
  </button>
</div>

      </div>
      <img src={`../assets/shapesurivialcrop.png`} alt={projectTitle} />

      
    </motion.div>
  );
};

const Project4 = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
        In Orbit was created by God Squad Studios in March of 2023. It is a gamepad controlled puzzle game. In Orbit was awarded 1st place in the Marion Surgical Hackathon.
        </p>
        <p className="mt-7">
        *Code unavailable due to NDA agreement.*
        </p>
        <br></br>
        <div style={{ whiteSpace: "nowrap" }}>
  
</div>

      </div>
      <img src={`../assets/inorbit3.png`} alt={projectTitle} />

      
    </motion.div>
  );
};

const Project5 = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
        Rhythm Road is a 3D endless runner game that utilizies music to enhance the gameplay experience. Players must synchronize their actions to the rhythm of the music in order to progress through the levels. 

        </p>
        <br></br>
        <div style={{ whiteSpace: "nowrap" }}>
  <button
    className="bg-yellow text-deep-blue rounded-sm py-3 px-3 font-semibold
    hover:bg-blue hover:text-white transition duration-500"
    onClick={handleProject5DemoClicked}
    href="https://www.youtube.com/"
    style={{ display: "inline-block" }}
  >
    Live Demo 
  </button>

  <button
    className="bg-yellow text-deep-blue rounded-sm py-3 px-8 font-semibold
    hover:bg-blue hover:text-white transition duration-500"
    onClick={handleProject5CodeClicked}
    href="https://www.youtube.com/"
    style={{ display: "inline-block", marginLeft: "16px" }}
  >
    Code
  </button>
</div>

      </div>
      <img src={`../assets/rythmroadcrop.png`} alt={projectTitle} />

      
    </motion.div>
  );
};

const Project6 = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Served Up is a western style, bar management game currently in development by God Squad Studios. The players objective is to mix drinks with the available ingredients and serve them to incoming saloon customers.
        </p>
        <br></br>
        <div style={{ whiteSpace: "nowrap" }}>
  <button
    className="bg-yellow text-deep-blue rounded-sm py-3 px-3 font-semibold
    hover:bg-blue hover:text-white transition duration-500"
    onClick={handleProject6DemoClicked}
    href="https://www.youtube.com/"
    style={{ display: "inline-block" }}
  >
    Live Demo 
  </button>

  <button
    className="bg-yellow text-deep-blue rounded-sm py-3 px-8 font-semibold
    hover:bg-blue hover:text-white transition duration-500"
    onClick={handleProject6CodeClicked}
    href="https://www.youtube.com/"
    style={{ display: "inline-block", marginLeft: "16px" }}
  >
    Code
  </button>
</div>

      </div>
      <img src={`../assets/servedUpPurple.png`} alt={projectTitle} />

      
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span>PROJECTS</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        I’ve brought many game prototypes to life. See below for some of my highlights!
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          
          <Project1 title="Origins' Fall" />
          <Project2 title="Sneak" />

          {/* ROW 2 */}
          <Project3 title="Shape Survival" />
          <Project4 title="In Orbit" />
          <Project5 title="Rythm Road" />

          {/* ROW 3 */}
          <Project6 title="Served Up" />
          
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
