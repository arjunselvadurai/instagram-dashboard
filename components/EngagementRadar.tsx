'use client';

import { ContentTypeStats } from '@/types/post';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';

interface EngagementRadarProps {
  stats: ContentTypeStats[];
}

const COLORS = ['#3B82F6', '#10B981', '#F59E0B'];

// Manually set view counts
const viewCounts = {
  reel: 642,
  carousel: 425,
  post: 349,
};

export default function EngagementRadar({ stats }: EngagementRadarProps) {
  // Use total metrics with proper scaling for visibility
  const data = [
    {
      metric: 'Likes',
      reel: stats[0]?.totalLikes || 0,
      carousel: stats[1]?.totalLikes || 0,
      post: stats[2]?.totalLikes || 0,
    },
    {
      metric: 'Comments',
      reel: (stats[0]?.totalComments || 0) * 5, // Scale up for visibility
      carousel: (stats[1]?.totalComments || 0) * 5,
      post: (stats[2]?.totalComments || 0) * 5,
    },
    {
      metric: 'Shares',
      reel: (stats[0]?.totalShares || 0) * 10, // Scale up for visibility
      carousel: (stats[1]?.totalShares || 0) * 10,
      post: (stats[2]?.totalShares || 0) * 10,
    },
    {
      metric: 'Views',
      reel: viewCounts.reel / 20, // Scale down for radar readability
      carousel: viewCounts.carousel / 20,
      post: viewCounts.post / 20,
    },
  ];

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Performance Radar - Content Comparison</h2>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="metric" />
          <PolarRadiusAxis />
          <Radar
            name="Reels"
            dataKey="reel"
            stroke={COLORS[0]}
            fill={COLORS[0]}
            fillOpacity={0.3}
          />
          <Radar
            name="Carousels"
            dataKey="carousel"
            stroke={COLORS[1]}
            fill={COLORS[1]}
            fillOpacity={0.3}
          />
          <Radar
            name="Posts"
            dataKey="post"
            stroke={COLORS[2]}
            fill={COLORS[2]}
            fillOpacity={0.3}
          />
          <Legend />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
