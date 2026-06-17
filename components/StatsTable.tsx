'use client';

import { ContentTypeStats } from '@/types/post';
import { formatNumber } from '@/lib/utils';

interface StatsTableProps {
  stats: ContentTypeStats[];
}

export default function StatsTable({ stats }: StatsTableProps) {
  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-gray-800">Detailed Statistics by Content Type</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Content Type</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Count</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Avg Likes</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Avg Comments</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Avg Shares</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Avg Saves</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Avg Views</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Avg Reach</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Engagement %</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((stat) => (
              <tr key={stat.type} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-800 capitalize">
                  {stat.type}s
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{stat.count}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{formatNumber(stat.avgLikes)}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{formatNumber(stat.avgComments)}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{formatNumber(stat.avgShares)}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{formatNumber(stat.avgSaves)}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{formatNumber(stat.avgViews)}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{formatNumber(stat.avgReach)}</td>
                <td className="px-6 py-4 text-sm font-semibold text-blue-600">
                  {stat.avgEngagementRate.toFixed(1)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
