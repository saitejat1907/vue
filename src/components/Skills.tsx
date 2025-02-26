import { motion } from 'framer-motion';
import { Brain, Database, LineChart, Code2, GitBranch, Terminal, FlaskRound as Flask, Cpu, BarChart4 } from 'lucide-react';

const skills = [
  {
    name: "Machine Learning",
    icon: <Brain className="w-8 h-8" />,
    description: "Deep Learning, Neural Networks, NLP",
    level: 90
  },
  {
    name: "Data Analysis",
    icon: <LineChart className="w-8 h-8" />,
    description: "Statistical Analysis, Data Visualization",
    level: 95
  },
  {
    name: "Python",
    icon: <Code2 className="w-8 h-8" />,
    description: "NumPy, Pandas, Scikit-learn",
    level: 95
  },
  {
    name: "SQL",
    icon: <Database className="w-8 h-8" />,
    description: "PostgreSQL, Database Design",
    level: 85
  },
  {
    name: "Version Control",
    icon: <GitBranch className="w-8 h-8" />,
    description: "Git, GitHub, Collaborative Development",
    level: 80
  },
  {
    name: "Shell Scripting",
    icon: <Terminal className="w-8 h-8" />,
    description: "Bash, Automation",
    level: 75
  },
  {
    name: "Data Engineering",
    icon: <Flask className="w-8 h-8" />,
    description: "ETL, Data Pipelines",
    level: 85
  },
  {
    name: "Big Data",
    icon: <Cpu className="w-8 h-8" />,
    description: "Spark, Hadoop",
    level: 70
  },
  {
    name: "Visualization",
    icon: <BarChart4 className="w-8 h-8" />,
    description: "Tableau, Power BI",
    level: 90
  }
];

const Skills = () => {
  return (
    <div className="py-24 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-xl hover:shadow-lg hover:shadow-violet-500/20 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-violet-600 rounded-lg">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-gradient-to-r from-blue-400 to-violet-400 h-2.5 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;