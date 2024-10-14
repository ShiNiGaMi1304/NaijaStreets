import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Upload, Film, Tag } from 'lucide-react';

type VideoUploadFormData = {
  title: string;
  description: string;
  category: string;
};

const VideoUpload: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<VideoUploadFormData>();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onSubmit = (data: VideoUploadFormData) => {
    console.log(data, selectedFile);
    // TODO: Implement video upload logic
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setSelectedFile(file);
  };

  const categories = [
    'Fashion', 'Sports', 'Entertainment', 'Education', 'Advertisement', 'Music', 'Comedy', 'Technology'
  ];

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
        <Upload className="mr-2" /> Upload Your Talent Video
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="video" className="block text-sm font-medium text-gray-700 mb-2">
            <Film className="inline mr-1" size={18} /> Select Video File
          </label>
          <input
            type="file"
            id="video"
            accept="video/*"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
          {selectedFile && (
            <p className="mt-2 text-sm text-gray-600">Selected file: {selectedFile.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Video Title
          </label>
          <input
            type="text"
            id="title"
            {...register('title', { required: 'Title is required' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
          {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>}
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            {...register('description', { required: 'Description is required' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          ></textarea>
          {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>}
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            <Tag className="inline mr-1" size={18} /> Category
          </label>
          <select
            id="category"
            {...register('category', { required: 'Category is required' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          Upload Video
        </button>
      </form>
    </div>
  );
};

export default VideoUpload;