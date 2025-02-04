
import { motion } from "framer-motion";
const AboutUs = () => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
          }
        }}
        viewport={{ once: false }}
        className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-5  "
      >
        {/* Title */}
        <div className="md:col-span-1 ">
          <h2 className="text-2xl font-bold mb-4 ">
            Leading Experts in Agile Software & eCommerce Development
          </h2>
        </div>
        {/* 2-column text */}
        <div className="  md:col-span-3 columns-1 md:columns-2 space-y-4 text-base leading-relaxed gap-10">
          <p className="text-justify">
            Founded in 2018, Akxens is a leading provider of agile software
            development, eCommerce development, and comprehensive digital
            transformation solutions. Our mission is to drive business success
            through tailored IT and tech solutions designed for enterprises,
            SMBs, and startups. At Akxens, we specialize in delivering
            end-to-end solutions that enhance operational efficiency and foster
            growth. Our experienced tech team excels in custom eCommerce
            development, mobile application development, and enterprise app
            development, ensuring that your digital needs are met with precision
            and innovation. <br /> <br /> We are committed to transforming your
            business with cutting-edge technologies and agile methodologies. Our
            core values—innovation, excellence, collaboration, and
            integrity—guide us in delivering high-quality solutions that align
            with your unique goals. Our notable achievements include developing
            high-impact digital platforms for major players in fintech, edtech,
            and deeptech sectors. Highlights include a performance-enhancing
            fintech solution and a scalable eLearning platform that
            significantly boosted user engagement.
            <br /> <br />
            At Akxens, we understand the urgency of transitioning from offline
            to online operations. That&apos;s why we offer expert guidance and
            customized digital solutions designed to expedite your journey to
            digital maturity. Our team of seasoned professionals works
            tirelessly to develop bespoke strategies and deploy innovative
            technologies that align with your unique business goals. <br />{" "}
            <br /> Whether you&apos;re seeking to streamline employee vetting
            processes, fortify your security posture, or boost on-time delivery
            efficiency, Akxens has you covered. We specialize in devising
            high-impact digital capabilities across critical business functions,
            including warehouse management, supply-chain optimization,
            procurement management, and more.
          </p>

          <button className="border-3 text-[#1877F2] hover:text-white font-semibold border-[#1877F2] hover:bg-[#1877F2] py-1 px-3 rounded-full rounded-pill">
            Read More
          </button>

          {/* ...additional paragraphs as needed... */}
        </div>
      </motion.div>
    );
};

export default AboutUs;