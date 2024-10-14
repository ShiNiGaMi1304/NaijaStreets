import React from 'react';
import { User, Video, Newspaper, Edit } from 'lucide-react';

const Profile: React.FC = () => {
  // Mock user data
  const user = {
    name: 'John Doe',
    username: '@johndoe',
    bio: 'Passionate content creator | Music lover | Tech enthusiast',
    profilePicture: 'https://source.unsplash.com/random/150x150?face',
  };

  // Mock user videos
  const userVideos = [
    { id: 1, title: 'My Latest Dance Routine', thumbnail: 'https://source.unsplash.com/random/300x200?dance' },
    { id: 2, title: 'Lagos Street Food Tour', thumbnail: 'https://source.unsplash.com/random/300x200?food' },
  ];

  // Mock user blog posts
  const userBlogs = [
    { id: 1, title: 'The Future of Nigerian Music', date: '2024-03-15' },
    { id: 2, title: 'My Journey as a Content Creator', date: '2024-03-10' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-center">
            <img
              src={user.profilePicture}
              alt={user.name}
              className="w-24 h-24 rounded-full object-cover mr-6"
            />
            <div>
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-gray-600">{user.username}</p>
              <p className="mt-2">{user.bio}</p>
            </div>
          </div>
          <button className="mt-4 flex items-center text-purple-600 hover:text-purple-700">
            <Edit size={18} className="mr-1" /> Edit Profile
          </button>
        </div>

        <div className="border-t border-gray-200 px-6 py-4">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Video className="mr-2" /> My Videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {userVideos.map((video) => (
              <div key={video.id} className="bg-gray-100 rounded-lg overflow-hidden">
                <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover" />
                <div className="p-3">
                  <h3 className="font-semibold">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 px-6 py-4">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Newspaper className="mr-2" /> My Blog Posts
          </h2>
          <ul className="space-y-2">
            {userBlogs.map((blog) => (
              <li key={blog.id} className="bg-gray-100 rounded-lg p-3">
                <h3 className="font-semibold">{blog.title}</h3>
                <p className="text-sm text-gray-600">Published on {blog.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;