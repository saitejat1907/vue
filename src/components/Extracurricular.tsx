import { motion } from 'framer-motion';
import { Trophy, Heart, Brain, Code2, FileText } from 'lucide-react';

const activities = [
  {
    title: "College Cricket Team Captain",
    icon: <Trophy className="w-6 h-6" />,
    description: "Led my college cricket team to state-level competitions in my sophomore year, demonstrating strong leadership, teamwork, and strategic planning skills. Managed team dynamics and developed game strategies, contributing to our successful performance at the state level."
  },
  {
    title: "Community Service",
    icon: <Heart className="w-6 h-6" />,
    description: "While working as a team member at Rural Institute of Centre for Excellence NGO Telangana, India during the COVID pandemic, I developed strong organizational skills, attention to detail, and the ability to handle sensitive information discreetly. Additionally, my interactions with diverse populations have equipped me to effectively support my team and address unique challenges."
  },
  {
    title: "AI/ML Conferences & Meetups",
    icon: <Brain className="w-6 h-6" />,
    description: "I actively participated in PyData and NeurIPS, where I engaged with leading researchers and practitioners in the field of AI and machine learning. These events provided valuable insights into the latest advancements, real-world applications, and emerging trends. I attended technical workshops, networking sessions, and keynote speeches by industry experts. This experience has helped me stay updated on cutting-edge research and refine my understanding of AI technologies."
  },
  {
    title: "Freelance Data Science Consulting",
    icon: <Code2 className="w-6 h-6" />,
    description: "I worked with FarmWiseAI, a Chennai-based startup, providing data-driven insights and solutions to optimize their AI models. My role involved analyzing agricultural datasets, improving prediction accuracy, and implementing machine learning techniques to enhance decision-making. Collaborating with the startup team, I contributed to refining their AI pipeline and improving operational efficiency. This freelance experience allowed me to apply my skills to real-world problems while gaining hands-on exposure to industry challenges."
  },
  {
    title: "Data Science Blogging",
    icon: <FileText className="w-6 h-6" />,
    description: "I write humorous and engaging articles on Medium that break down complex AI and data science concepts in a fun and relatable way. My goal is to make technical topics more accessible while adding a touch of humor to keep readers entertained. Through storytelling and real-world analogies, I simplify difficult concepts like machine learning algorithms, statistics, and data ethics. This passion for writing not only helps me refine my own understanding but also allows me to contribute to the data science community in a creative way."
  }
];

const Extracurricular = () => {
  return (
    <div className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text">
            Extracurricular Activities
          </h2>
          <div className="space-y-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-8 rounded-xl hover:shadow-lg hover:shadow-violet-500/20 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-violet-600 rounded-lg shrink-0">
                    {activity.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-violet-400">{activity.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{activity.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Extracurricular;