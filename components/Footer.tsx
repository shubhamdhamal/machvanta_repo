import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Instagram, Globe } from "lucide-react";

const Footer = () => (
  <footer className="bg-slate-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-600 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Image
              src="/Machvanta_symbol.svg"
              alt="Machvanta logo"
              width={32}
              height={32}
              className="w-8 h-8 dark:invert dark:brightness-0"
            />
            <span className="font-bold text-2xl text-slate-800 dark:text-white">
              MACHVANTA
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Automation integration & bespoke development for industrial workflows. We specialize in PLC/SCADA integration, custom software development, and complete line automation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6">Quick Links</h3>
          <ul className="space-y-3">
            {['Home', 'About Us', 'Services', /* 'Projects', */ 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6">Services</h3>
          <ul className="space-y-3">
            {[
              'PLC/SCADA Integration',
              'Custom Control Systems',
              'Conveyor Automation',
              'Industrial Control Panels',
              'Servo & VFD Systems',
              'SCADA & IIoT Solutions',
              'Machine Automation',
              'Electrical Services'
            ].map((service) => (
              <li key={service}>
                <Link
                  href="/services"
                  className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
              <MapPin className="mt-1 flex-shrink-0 text-cyan-500" size={18} />
              <span>Zen Square, 3rd Floor, Shop No – 305, Kharadi, Pune</span>
            </li>
            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <Mail className="flex-shrink-0 text-cyan-500" size={18} />
              <div className="flex flex-col">
                <a href="mailto:info@machvanta.com" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">info@machvanta.com</a>
                <a href="mailto:service@machvanta.com" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">service@machvanta.com</a>
              </div>
            </li>
            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <Phone className="flex-shrink-0 text-cyan-500" size={18} />
              <div className="flex flex-col">
                <a href="tel:+919975446663" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">+91 9975446663</a>
                <a href="tel:+918788294925" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">+91 8788294925</a>
              </div>
            </li>
          </ul>

          {/* Social Links */}
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-slate-800 dark:text-white mb-3">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/machvanta-india-pvt-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-cyan-500 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/machvanta"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-cyan-500 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.machvanta.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-cyan-500 hover:text-white transition-colors"
                aria-label="Website"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-gray-200 dark:border-slate-600">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center md:text-left">
            © 2025 Machvanta India Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy-policy" className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
