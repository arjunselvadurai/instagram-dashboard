'use client';

import { ContentTypeStats } from '@/types/post';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface ComparisonChartProps {
  stats: ContentTypeStats[];
}

export default function ComparisonChart({ stats }: ComparisonChartProps) {
  // Manually set the view counts as provided
  const viewCounts = {
    reel: 642,
    carousel: 425,
    post: 349,
  };

  const data = stats.map((stat) => ({
    type: stat.type.charAt(0).toUpperCase() + stat.type.slice(1),
    Likes: stat.totalLikes,
    Comments: stat.totalComments,
    Shares: stat.totalShares,
    Saves: stat.totalSaves,
    Views: viewCounts[stat.type as keyof typeof viewCounts] || 0,
  }));

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Total Metrics by Content Type</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="type" />
          <YAxis />
          <Tooltip formatter={(value) => value.toLocaleString()} />
          <Legend />
          <Bar dataKey="Likes" fill="#3B82F6" />
          <Bar dataKey="Comments" fill="#10B981" />
          <Bar dataKey="Shares" fill="#F59E0B" />
          <Bar dataKey="Saves" fill="#8B5CF6" />
          <Bar dataKey="Views" fill="#EC4899" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
