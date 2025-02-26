import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <div className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text">
            Education & Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 p-8 rounded-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <GraduationCap className="w-8 h-8 text-violet-400" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold text-violet-400">Master of Computer Science</h4>
                  <p className="text-gray-400">Campbellsville University</p>
                  <p className="text-gray-500">June 2023 - October 2024</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-violet-400">Bachelor of Electronics and Communication Engineering</h4>
                  <p className="text-gray-400">GITAM University</p>
                  <p className="text-gray-500">June 2016 - July 2020</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 p-8 rounded-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <Award className="w-8 h-8 text-violet-400" />
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              <div className="space-y-4">
                {[
                  "AWS Certified Data Engineer Associate",
                  "AWS Certified Solutions Architect",
                  "Microsoft Certified: Azure Administrator Associate",
                  "Microsoft Generative AI",
                  "Tableau Desktop Specialist",
                  "Certified Data Scientist Data Science Institute",
                  "Microsoft Certified: Azure Data Engineer Associate",
                  "IBM Certified Data Science Professional",
                  "IBM Certified AI Developer"
                ].map((cert, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <BookOpen className="w-6 h-6 text-violet-400 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold">{cert}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;