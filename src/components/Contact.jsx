import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate immediate success response
    setTimeout(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');
      setForm({ name: '', email: '', message: '' });
    }, 500); // Short delay for visual feedback
  };

  return (
    <div className="-mt-[8rem] xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>
        <p className="text-timberWolf text-[16px] mt-2">
          Email: salmanfarishassan4519@gmail.com
        </p>
        <p className="text-timberWolf text-[16px] mt-1">
          Phone: +91 9562019132 {/* Replace with your actual phone number */}
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href="https://www.instagram.com/sallu_salmanz/" // Replace with your Instagram profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-timberWolf hover:text-battleGray transition duration-200 flex items-center gap-2"
            aria-label="Instagram profile"
          >
            <i className="fab fa-instagram text-[24px]"></i>
            <span className="text-[14px]">Instagram</span>
          </a>
          <a
            href="https://github.com/salman4519" // Replace with your GitHub profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-timberWolf hover:text-battleGray transition duration-200 flex items-center gap-2"
            aria-label="GitHub profile"
          >
            <i className="fab fa-github text-[24px]"></i>
            <span className="text-[14px]">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/hafiz-salman-153236249/" // Replace with your LinkedIn profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-timberWolf hover:text-battleGray transition duration-200 flex items-center gap-2"
            aria-label="LinkedIn profile"
          >
            <i className="fab fa-linkedin text-[24px]"></i>
            <span className="text-[14px]">LinkedIn</span>
          </a>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins"
        >
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            className={`live-demo flex justify-center sm:gap-4 gap-3 sm:text-[20px] text-[16px] text-timberWolf font-bold font-beckman items-center py-5 whitespace-nowrap sm:w-[130px] sm:h-[50px] w-[100px] h-[45px] rounded-[10px] bg-night hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s] ease-in-out ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading}
            onMouseOver={() => {
              if (!loading) {
                document.querySelector('.contact-btn')?.setAttribute('src', sendHover);
              }
            }}
            onMouseOut={() => {
              if (!loading) {
                document.querySelector('.contact-btn')?.setAttribute('src', send);
              }
            }}
          >
            {loading ? 'Sending...' : 'Send'}
            <img
              src={send}
              alt="Send message icon"
              className="contact-btn sm:w-[26px] sm:h-[26px] w-[23px] h-[23px] object-contain"
            />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');