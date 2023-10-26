import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../assets/GrantMacMillanResume.pdf";

const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "../assets/Resume2024.pdf";
  link.download = "GrantMacMillanResume.pdf";
  link.click();
};

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
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
            Grant {""}
            <span
              className="xs:relative xs:text-purple xs:font-semibold z-20 
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              MacMillan
            </span>
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Passionate game developer with experience as a front-end developer, actively seeking full-time opportunities to bring fresh ideas to the gaming industry.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >


          <div style={{ whiteSpace: "nowrap" }}>
            <AnchorLink
              className="bg-yellow text-deep-blue rounded-sm py-3 px-5 font-semibold
    hover:bg-blue hover:text-white transition duration-500"
              onClick={() => setSelectedPage("contact")}
              href="#contact"
              style={{ display: "inline-block" }}
            >
              Contact Me
            </AnchorLink>

            <button
              className="bg-yellow text-deep-blue rounded-sm py-3 px-8 font-semibold
    hover:bg-blue hover:text-white transition duration-500"
              onClick={downloadResume}
              href={resume} download="Resume"
              style={{ display: "inline-block", marginLeft: "16px" }}
            >
              Resume
            </button>
          </div>

        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
