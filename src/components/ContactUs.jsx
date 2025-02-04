import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="bg-gray-100">
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: false }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10 mx-auto container"
      >
        {/* Contact form */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-4">Drop Us a Line</h2>
          <p className="mb-4 font-semibold">
            Reach out to us from our contact form and we will get back to you
            shortly.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-lg font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div>
              <label
                className="block text-lg font-medium mb-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-md"
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Other content */}
        <aside className="md:col-span-1">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="mb-4">
            Feel free to reach out to us for any inquiries or questions. We are
            here to help!
          </p>
          <p className="mb-2">
            <strong>Email:</strong> contact@akxens.com
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> +1 234 567 890
          </p>
          <p className="mb-2">
            <strong>Address:</strong> 1234 Street Name, City, State, ZIP
          </p>
        </aside>
      </motion.section>
    </div>
  );
};

export default ContactUs;
