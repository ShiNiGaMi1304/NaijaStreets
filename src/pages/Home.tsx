import React from 'react';
import { Play, Newspaper } from 'lucide-react';

const Home: React.FC = () => {
  // Mock data for trending videos and top blogs
  const trendingVideos = [
    { id: 1, title: 'Amazing Dance Performance', thumbnail: 'https://source.unsplash.com/random/300x200?dance' },
    { id: 2, title: 'Football Skills Showcase', thumbnail: 'https://source.unsplash.com/random/300x200?football' },
    { id: 3, title: 'Cooking Nigerian Delicacies', thumbnail: 'https://source.unsplash.com/random/300x200?cooking' },
  ];

  const topBlogs = [
    { id: 1, title: 'The Rise of Afrobeats', author: 'Oluwaseun A.' },
    { id: 2, title: 'Nigerian Fashion: A Global Influence', author: 'Chioma B.' },
    { id: 3, title: 'Tech Startups in Lagos', author: 'Emeka C.' },
  ];

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Play className="mr-2" /> Trending Videos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {trendingVideos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Newspaper className="mr-2" /> Top Blogs
        </h2>
        <div className="space-y-4">
          {topBlogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="font-semibold text-lg">{blog.title}</h3>
              <p className="text-gray-600">By {blog.author}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;