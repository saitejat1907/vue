import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Real-Time Stock Market Data with AWS and Kafka",
    description: "Real-time stock market data processing using Apache Kafka and AWS services.",
    link: "https://github.com/Lucky-akash321/Real-Time-Stock-Market-Data-with-Kafka-and-AWS",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=500"
  },
  {
    title: "Hands-On Introduction: Data Engineering",
    description: "Comprehensive guide to data engineering practices and implementations.",
    link: "https://github.com/Lucky-akash321/Hands-on-Data-Engineering",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500"
  },
  {
    title: "Personalized Healthcare Recommendation System",
    description: "AI-powered healthcare recommendation system for personalized patient care.",
    link: "https://github.com/Lucky-akash321/Personalized-Healthcare-Recommendation-System",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=500"
  },
  {
    title: "Disaster Message Classifier",
    description: "ML model for classifying disaster-related messages for emergency response.",
    link: "https://github.com/Lucky-akash321/Disaster-Message-Classifier",
    image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&q=80&w=500"
  },
  {
    title: "Financial Data Analytics and Forecast Model",
    description: "Advanced analytics and forecasting model for financial data.",
    link: "https://github.com/Lucky-akash321/Financial-Data-Analytics-and-Forecasting-Model",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500"
  },
  {
    title: "Data Pipeline Automation with GitHub Actions",
    description: "Automated data pipeline using GitHub Actions for CI/CD.",
    link: "https://github.com/Lucky-akash321/Data-Pipeline-Automation-with-GitHub-Actions",
    image: "https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?auto=format&fit=crop&q=80&w=500"
  },
  {
    title: "End to End Machine Learning Projects",
    description: "Collection of complete machine learning project implementations.",
    link: "https://github.com/Lucky-akash321/End-to-End-Machine-Learning-Projects",
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&q=80&w=500"
  }
];

const Projects = () => {
  return (
    <div className="py-24 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-violet-500/20 transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-violet-400">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>View on GitHub</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <motion.a
              href="https://github.com/Lucky-akash321"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-violet-600 transition-all"
            >
              <ExternalLink className="w-5 h-5" />
              View More Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;