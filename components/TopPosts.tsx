'use client';

import { Post, ContentType } from '@/types/post';
import { formatNumber } from '@/lib/utils';

interface TopPostsProps {
  posts: Post[];
}

export default function TopPosts({ posts }: TopPostsProps) {
  const types: ContentType[] = ['reel', 'carousel', 'post'];

  const topPostsByType = types.map((type) => {
    const typePosts = posts
      .filter((post) => post.type === type)
      .sort((a, b) => b.likes + b.comments + b.shares - (a.likes + a.comments + a.shares))
      .slice(0, 1);
    return { type, posts: typePosts };
  });

  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-gray-800">Top Performing Posts</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        {topPostsByType.map(({ type, posts: typePosts }) => {
          const post = typePosts[0];
          return (
            <div
              key={type}
              className="border rounded-lg p-4 hover:shadow-lg transition-shadow bg-gray-50"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-gray-800 capitalize">{type} #1</h3>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  Top Performer
                </span>
              </div>
              {post ? (
                <>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{post.caption}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white p-2 rounded">
                      <p className="text-gray-500">Likes</p>
                      <p className="font-bold text-gray-800">{formatNumber(post.likes)}</p>
                    </div>
                    <div className="bg-white p-2 rounded">
                      <p className="text-gray-500">Comments</p>
                      <p className="font-bold text-gray-800">{formatNumber(post.comments)}</p>
                    </div>
                    <div className="bg-white p-2 rounded">
                      <p className="text-gray-500">Engagement</p>
                      <p className="font-bold text-gray-800">{post.engagementRate.toFixed(1)}%</p>
                    </div>
                    <div className="bg-white p-2 rounded">
                      <p className="text-gray-500">Reach</p>
                      <p className="font-bold text-gray-800">{formatNumber(post.reach)}</p>
                    </div>
                  </div>
                </>
              ) : (
                <p className="text-gray-400 text-center py-4">No posts</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
