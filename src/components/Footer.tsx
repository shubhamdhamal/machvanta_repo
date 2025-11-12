'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-black-600 to-black-600 rounded-lg flex items-center justify-center">
                  <Image
                    src="/M_logo_white.png"
                    alt="Machvanta Logo"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <span className="text-xl font-bold">Machvanta India Pvt Ltd</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Automation integration & bespoke development for industrial workflows.
                We specialize in PLC/SCADA integration, custom software development,
                and complete line automation.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Zen Square, 3rd Floor, Shop No – 305</p>
                <p>Kharadi, Pune</p>
                <p>Email: info@machvanta.com | service@machvanta.com </p>
                <p>Phone: +91 9975446663 | +91 7822925356</p>
              </div>

              {/* Social Media Links */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-white mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://www.linkedin.com/company/machvanta-india-pvt-ltd"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/machvanta_india"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/services/plc-scada-system-integration" className="hover:text-white transition-colors">
                    PLC/SCADA System Integration
                  </Link>
                </li>
                <li>
                  <Link href="/services/custom-control-systems" className="hover:text-white transition-colors">
                    Custom Control Systems
                  </Link>
                </li>
                <li>
                  <Link href="/services/conveyor-line-automation" className="hover:text-white transition-colors">
                    Conveyor Line Automation
                  </Link>
                </li>
                <li>
                  <Link href="/services/process-control-solutions" className="hover:text-white transition-colors">
                    Process Control Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services/spm-sbm-integration" className="hover:text-white transition-colors">
                    SPM/SBM Integration
                  </Link>
                </li>
                <li>
                  <Link href="/services/servo-system" className="hover:text-white transition-colors">
                    Servo System
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Machvanta India Pvt Ltd. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
