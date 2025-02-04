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
        className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10 border mx-auto container"
      >
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

        {/* Contact form */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form className="space-y-4">
            {/* First row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="input-group">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  placeholder=" "
                />
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  placeholder=" "
                />
                <label htmlFor="lastName">Last Name</label>
              </div>
            </div>

            {/* Second row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="input-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder=" "
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-group">
                <select
                  id="department"
                  name="department"
                  required
                  placeholder=" "
                >
                  <option value="" disabled selected></option>
                  <option value="sales">Sales</option>
                  <option value="support">Support</option>
                  <option value="marketing">Marketing</option>
                  <option value="hr">HR</option>
                </select>
                <label htmlFor="department">Department</label>
              </div>
            </div>

            {/* Third row */}
            <div className="input-group">
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder=" "
              ></textarea>
              <label htmlFor="message">Message</label>
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactUs;
