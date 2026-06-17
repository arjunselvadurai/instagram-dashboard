'use client';

import { DashboardMetrics } from '@/types/post';
import { formatNumber } from '@/lib/utils';

interface InsightsSummaryProps {
  metrics: DashboardMetrics;
}

export default function InsightsSummary({ metrics }: InsightsSummaryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
        <p className="text-gray-600 text-sm font-medium">Total Posts</p>
        <p className="text-3xl font-bold text-gray-800 mt-2">{metrics.totalPosts}</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
        <p className="text-gray-600 text-sm font-medium">Total Views</p>
        <p className="text-3xl font-bold text-gray-800 mt-2">{formatNumber(metrics.totalViews)}</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
        <p className="text-gray-600 text-sm font-medium">Total Likes</p>
        <p className="text-3xl font-bold text-gray-800 mt-2">{formatNumber(metrics.totalLikes)}</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-pink-500">
        <p className="text-gray-600 text-sm font-medium">Total Comments</p>
        <p className="text-3xl font-bold text-gray-800 mt-2">{formatNumber(metrics.totalComments)}</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
        <p className="text-gray-600 text-sm font-medium">Total Shares</p>
        <p className="text-3xl font-bold text-gray-800 mt-2">{formatNumber(metrics.totalShares)}</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
        <p className="text-gray-600 text-sm font-medium">Total Saves</p>
        <p className="text-3xl font-bold text-gray-800 mt-2">{formatNumber(metrics.totalSaves)}</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-500">
        <p className="text-gray-600 text-sm font-medium">Total Engagement</p>
        <p className="text-3xl font-bold text-gray-800 mt-2">{formatNumber(metrics.totalEngagement)}</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-500">
        <p className="text-gray-600 text-sm font-medium">Best Content Type</p>
        <p className="text-2xl font-bold text-gray-800 mt-2 capitalize">
          {metrics.bestPerformingType}s
        </p>
      </div>
    </div>
  );
}
