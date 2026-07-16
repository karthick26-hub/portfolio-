import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const contacts = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "karthickkumaran2604@gmail.com",
      link: "mailto:karthickkumaran2604@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "+91 93603 65632",
      link: "tel:+919360365632",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Chennai, Tamil Nadu, India",
      link: "#",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/karthick26-hub",
      link: "https://github.com/karthick26-hub",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "linkedin.com/in/karthick-kumaran-anandhan",
      link: "https://www.linkedin.com/in/karthick-kumaran-anandhan-91922a414/",
    },
  ];

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[5px] text-cyan-600">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
            Let's Connect
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            I'm actively looking for opportunities as a Python Developer,
            Machine Learning Engineer, or Data Analyst. Feel free to connect
            with me through any of the platforms below.
          </p>
        </motion.div>

        {/* Contact Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">

          {contacts.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.link}
              target={
                item.link.startsWith("http") ? "_blank" : "_self"
              }
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="flex items-center gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg transition-all duration-300 hover:border-cyan-500 hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500 text-3xl text-white">
                {item.icon}
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-600 break-all">
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Contact;