'use client';

import { ContentTypeStats } from '@/types/post';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';

interface ContentDistributionProps {
  stats: ContentTypeStats[];
}

const COLORS = ['#3B82F6', '#10B981', '#F59E0B'];

export default function ContentDistribution({ stats }: ContentDistributionProps) {
  const data = stats.map((stat) => ({
    name: `${stat.type.charAt(0).toUpperCase() + stat.type.slice(1)}s (${stat.count})`,
    value: stat.count,
  }));

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Content Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => value.toString()} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
