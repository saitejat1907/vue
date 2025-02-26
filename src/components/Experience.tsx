import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Brain, Database, LineChart, Code2 } from 'lucide-react';

const experiences = [
  {
    title: "Data Analyst Intern",
    company: "Maximus Tech",
    date: "December 2024 - Present",
    description: "Working as a Data Analyst Intern, focusing on data analysis and visualization.",
    icon: <Database className="text-white" />,
    iconBg: "#4c1d95"
  },
  {
    title: "Data Engineer",
    company: "Celnet Inc",
    date: "October 2023 - December 2023",
    description: "Worked as a Data Engineer, developing and maintaining data pipelines and infrastructure.",
    icon: <Code2 className="text-white" />,
    iconBg: "#1d4ed8"
  },
  {
    title: "AI & ML Intern",
    company: "IIT GUWAHATI",
    date: "September 2020 - June 2021",
    description: "Interned at Indian Institute of Technology GUWAHATI, working on AI and ML projects.",
    icon: <Brain className="text-white" />,
    iconBg: "#4338ca"
  },
  {
    title: "Student Intern",
    company: "BHARAT Electronics",
    date: "March 2019 - June 2019",
    description: "Completed internship at BHARAT Electronics, gaining hands-on experience in electronics and data systems.",
    icon: <LineChart className="text-white" />,
    iconBg: "#6d28d9"
  }
];

const Experience = () => {
  return (
    <div className="py-24 bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text">
          Professional Journey
        </h2>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#1f2937', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid #1f2937' }}
              date={experience.date}
              iconStyle={{ background: experience.iconBg }}
              icon={experience.icon}
            >
              <h3 className="text-xl font-bold">{experience.title}</h3>
              <h4 className="text-violet-400">{experience.company}</h4>
              <p className="text-gray-300 mt-4">{experience.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
    </div>
  );
};

export default Experience;