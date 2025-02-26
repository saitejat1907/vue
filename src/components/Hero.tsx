import { motion } from 'framer-motion';
import { Brain, Database, LineChart, FileText, Github, Linkedin, Instagram, Newspaper } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800">
      <div className="container mx-auto px-4 py-16">
        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center gap-4 mb-12"
        >
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-violet-600 rounded-lg hover:bg-violet-700 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://github.com/Lucky-akash321"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-violet-600 rounded-lg hover:bg-violet-700 transition-colors"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://medium.com/@akashdvp99"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-violet-600 rounded-lg hover:bg-violet-700 transition-colors"
          >
            <Newspaper className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/akashdevulapally/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-violet-600 rounded-lg hover:bg-violet-700 transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </motion.a>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text">
              Akash Devulapally
            </h1>
            <h2 className="text-3xl font-semibold mb-6 text-gray-300">
              Data Engineer | Data Scientist
            </h2>
            <p className="text-gray-300 text-xl mb-8">
              I am a Data Engineer and Data Scientist specializing in data pipelines, big data streaming, and machine learning. With expertise in Python, Spark, SQL, and AWS, I transform raw data into actionable insights and scalable solutions. My experience includes financial forecasting, customer segmentation, and real-time analytics. I have developed React JS applications and optimized cloud-based architectures. Passionate about data-driven decision-making, I thrive in cross-functional teams to deliver impactful results.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-lg"
              >
                <Brain size={20} />
                <span>ML Models</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg"
              >
                <Database size={20} />
                <span>Data Engineering</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg"
              >
                <LineChart size={20} />
                <span>Analytics</span>
              </motion.div>
              <motion.a
                href="https://drive.google.com/file/d/1dQDvD5lYfN1_V2dbAyUf7lfnrTmkb1Hx/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-violet-600 transition-all"
              >
                <FileText size={20} />
                <span>View Resume</span>
              </motion.a>
            </div>
          </motion.div>
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-violet-400">
              <img 
                src="/akash.jpg" 
                alt="Akash Devulapally" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;