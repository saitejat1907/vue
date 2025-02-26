import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';

const blogs = [
  {
    title: "What If Historical Figures Had GitHub Profiles?",
    description: "A Quirky Way to Discuss Software Engineering Principles",
    link: "https://medium.com/@akashdvp99/what-if-historical-figures-had-github-profiles-3f15b2256ed6",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=500"
  },
  {
    title: "Can We Decode Human Emotions Using Only Spotify Playlists?",
    description: "Exploring the connection between music and emotions through data analysis",
    link: "https://medium.com/@akashdvp99/can-we-decode-human-emotions-using-only-spotify-playlists-91894bd59af8",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=500"
  },
  {
    title: "What If AI Played Cricket?",
    description: "Predicting Match Outcomes Like a Pro",
    link: "https://medium.com/@akashdvp99/what-if-ai-played-cricket-predicting-match-outcomes-like-a-pro-fc0e8bf9b79c",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=500"
  },
  {
    title: "How Would Sherlock Holmes Solve Data Science Problems?",
    description: "Applying detective thinking to data science challenges",
    link: "https://medium.com/@akashdvp99/how-would-sherlock-holmes-solve-data-science-problems-744131b9a7c4",
    image: "https://images.unsplash.com/photo-1569834381156-7b735e41e57d?auto=format&fit=crop&q=80&w=500"
  }
];

const Blogs = () => {
  return (
    <div className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text">
            Technical Blogs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-violet-500/20 transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-violet-600 rounded-lg shrink-0">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-violet-400">{blog.title}</h3>
                      <p className="text-gray-400 mb-4">{blog.description}</p>
                      <a
                        href={blog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        Read on Medium →
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <motion.a
              href="https://medium.com/@akashdvp99"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-violet-600 transition-all"
            >
              <ExternalLink className="w-5 h-5" />
              View More Articles
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;