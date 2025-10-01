'use client';

import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: 'SPM Integration',
      industry: 'Automotive',
      description: 'Complete automation of assembly line with robotic arms integration, PLC control systems, and real-time monitoring.',
      image: '/SPM_Integration.png',
      technologies: ['PLC Programming', 'SCADA', 'Robotics', 'HMI'],
      features: [
        'Automated assembly line',
        'Real-time quality monitoring',
        'Predictive maintenance',
        'Production analytics'
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'PLC & SCADA Retrofit',
      industry: 'FMCG',
      description: 'Modernization of existing manufacturing facility with new PLC systems and advanced SCADA interface.',
      image: '/PLC_SCADA_Retrofit.png',
      technologies: ['PLC Retrofit', 'SCADA Upgrade', 'HMI Design', 'Data Logging'],
      features: [
        'Legacy system modernization',
        'Enhanced monitoring capabilities',
        'Improved efficiency metrics',
        'Reduced downtime'
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Conveyor Line Automation',
      industry: 'Packaging',
      description: 'Intelligent conveyor system with automated sorting, quality control, and packaging integration.',
      image: '/Conveyor_Line_Automation.png',
      technologies: ['Conveyor Control', 'Vision Systems', 'Packaging', 'IoT'],
      features: [
        'Automated sorting system',
        'Quality control integration',
        'Packaging automation',
        'IoT connectivity'
      ],
      color: 'from-green-500 to-green-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto">
              Showcasing successful automation implementations across various industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={projectVariants}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8 items-center`}
              >
                {/* Project Image */}
                <div className="w-full lg:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-2xl shadow-lg group"
                  >
                    {project.image !== '/api/placeholder/600/400' ? (
                      <div className="relative w-full h-80 bg-gray-200">
                        <Image
                          src={project.image}
                          alt={`${project.title} - ${project.industry} Automation Project | MACHVANTA Industrial Automation`}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          onError={(e) => {
                            console.error('Image failed to load:', e);
                            e.currentTarget.style.display = 'none';
                          }}
                          onLoad={() => {
                            console.log('Image loaded successfully');
                          }}
                        />
                      </div>
                    ) : (
                      <div className={`w-full h-80 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                        <div className="text-white text-center">
                          <div className="text-6xl mb-4">🏭</div>
                          <p className="text-lg font-semibold">{project.title}</p>
                          <p className="text-sm opacity-80">{project.industry}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Project Details */}
                <div className="w-full lg:w-1/2">
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-sm font-semibold rounded-full`}>
                        {project.industry}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    <p className="text-gray-600 mb-6">{project.description}</p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <div className={`w-2 h-2 bg-gradient-to-r ${project.color} rounded-full`}></div>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/**
                     * Button group removed per request
                     * <div className="flex gap-4">
                     *   <button className={`flex-1 bg-gradient-to-r ${project.color} text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}>
                     *     View Case Study
                     *   </button>
                     *   <button className="px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-lg font-semibold hover:border-gray-300 transition-colors">
                     *     <FiExternalLink className="w-5 h-5" />
                     *   </button>
                     * </div>
                     */}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Project Success Metrics
            </h2>
            <p className="text-lg text-gray-600">
              Our track record speaks for itself
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support Available' },
              { number: '15+', label: 'Industries Served' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help automate your industrial processes and achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors text-center">
                Start Your Project
              </Link>
              <a
                href="/broucher_landscape.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors text-center"
              >
                Download Brochure
              </a>
            </div>
          </motion.div >
        </div >
      </section >
    </div >
  );
}
