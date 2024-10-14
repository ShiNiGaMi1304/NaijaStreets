import React from 'react';
import { useForm } from 'react-hook-form';
import { PenTool, Tag } from 'lucide-react';

type BlogCreateFormData = {
  title: string;
  content: string;
  category: string;
};

const BlogCreate: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<BlogCreateFormData>();

  const onSubmit = (data: BlogCreateFormData) => {
    console.log(data);
    // TODO: Implement blog post creation logic
  };

  const categories = [
    'Lifestyle', 'Technology', 'Music', 'Fashion', 'Food', 'Travel', 'Sports', 'Entertainment'
  ];

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
        <PenTool className="mr-2" /> Create a New Blog Post
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Blog Title
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
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
            Blog Content
          </label>
          <textarea
            id="content"
            rows={10}
            {...register('content', { required: 'Content is required' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          ></textarea>
          {errors.content && <p className="mt-1 text-sm text-red-600">{errors.content.message}</p>}
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
          Publish Blog Post
        </button>
      </form>
    </div>
  );
};

export default BlogCreate;