import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-16 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-white">
          <span className="text-purple">My </span>Skills
        </p>
        <LineGradient width="mx-auto w-5/5" />
        <p className="mt-10">
          Here's what I can offer you.
        </p>
      </motion.div>

      {/* ABOUT */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-purple max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-220px] before:-ml-[195px] before:left-1/2 before:content-unityhex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-center text-6xl">UNITY</p>
          <br></br>
          <p className="text-center text-xl">
            Unity 3D, Unity 2D, Navmesh, URP, Animation, UI
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-purple max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
          before:absolute before:top-[-220px] before:-ml-[195px] before:left-1/2 before:content-csharphex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-center text-6xl">C#</p>
          <br></br>
          <p className="text-center text-xl">
            Events, WPF, .NET Core, Visual Studio, VS Code
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-purple max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
          before:absolute before:top-[-220px] before:-ml-[195px] before:left-1/2 before:content-jshex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-center text-6xl">JS</p>
          <br></br>
          <p className="text-center text-xl">
            Javascript, HTML, CSS, React, React Native
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
