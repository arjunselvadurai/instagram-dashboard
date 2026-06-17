import InsightsSummary from '@/components/InsightsSummary';
import ComparisonChart from '@/components/ComparisonChart';
import ContentDistribution from '@/components/ContentDistribution';
import EngagementRadar from '@/components/EngagementRadar';
import StatsTable from '@/components/StatsTable';
import TopPosts from '@/components/TopPosts';
import { mockPosts } from '@/data/mockData';
import { getDashboardMetrics } from '@/lib/utils';

export default function Home() {
  const metrics = getDashboardMetrics(mockPosts);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">📊 Instagram Analytics Dashboard</h1>
              <p className="mt-2 text-gray-600">Compare performance of Reels, Carousels & Posts</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Insights Summary Cards */}
        <InsightsSummary metrics={metrics} />

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <ComparisonChart stats={metrics.stats} />
          <ContentDistribution stats={metrics.stats} />
        </div>

        {/* Radar Chart */}
        <div className="mb-6">
          <EngagementRadar stats={metrics.stats} />
        </div>

        {/* Top Posts */}
        <div className="mb-6">
          <TopPosts posts={metrics.posts} />
        </div>

        {/* Stats Table */}
        <StatsTable stats={metrics.stats} />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>
            Instagram Dashboard • Built with Next.js, React & Recharts • For Marketing Team
          </p>
        </div>
      </footer>
    </div>
  );
}
