import { Post, ContentType, ContentTypeStats, DashboardMetrics } from '@/types/post';

export function calculateStats(posts: Post[]): ContentTypeStats[] {
  const types: ContentType[] = ['reel', 'carousel', 'post'];

  return types.map((type) => {
    const typePosts = posts.filter((post) => post.type === type);

    if (typePosts.length === 0) {
      return {
        type,
        count: 0,
        avgLikes: 0,
        avgComments: 0,
        avgShares: 0,
        avgSaves: 0,
        avgViews: 0,
        avgReach: 0,
        avgImpressions: 0,
        avgEngagementRate: 0,
        totalLikes: 0,
        totalComments: 0,
        totalShares: 0,
        totalSaves: 0,
      };
    }

    const totalLikes = typePosts.reduce((sum, p) => sum + p.likes, 0);
    const totalComments = typePosts.reduce((sum, p) => sum + p.comments, 0);
    const totalShares = typePosts.reduce((sum, p) => sum + p.shares, 0);
    const totalSaves = typePosts.reduce((sum, p) => sum + p.saves, 0);
    const totalViews = typePosts.reduce((sum, p) => sum + p.views, 0);
    const totalReach = typePosts.reduce((sum, p) => sum + p.reach, 0);
    const totalImpressions = typePosts.reduce((sum, p) => sum + p.impressions, 0);
    const totalEngagement = typePosts.reduce((sum, p) => sum + p.engagementRate, 0);

    const count = typePosts.length;

    return {
      type,
      count,
      avgLikes: Math.round(totalLikes / count),
      avgComments: Math.round(totalComments / count),
      avgShares: Math.round(totalShares / count),
      avgSaves: Math.round(totalSaves / count),
      avgViews: Math.round(totalViews / count),
      avgReach: Math.round(totalReach / count),
      avgImpressions: Math.round(totalImpressions / count),
      avgEngagementRate: Number((totalEngagement / count).toFixed(1)),
      totalLikes,
      totalComments,
      totalShares,
      totalSaves,
    };
  });
}

export function getDashboardMetrics(posts: Post[]): DashboardMetrics {
  const stats = calculateStats(posts);

  const totalLikes = posts.reduce((sum, p) => sum + p.likes, 0);
  const totalComments = posts.reduce((sum, p) => sum + p.comments, 0);
  const totalShares = posts.reduce((sum, p) => sum + p.shares, 0);
  const totalSaves = posts.reduce((sum, p) => sum + p.saves, 0);
  const totalViews = posts.reduce((sum, p) => sum + p.views, 0);

  const totalEngagement = totalLikes + totalComments + totalShares + totalSaves;
  const totalReach = posts.reduce((sum, p) => sum + p.reach, 0);
  const totalImpressions = posts.reduce((sum, p) => sum + p.impressions, 0);

  // Find best performing type by average engagement rate
  const bestType = stats.reduce((best, current) =>
    current.avgEngagementRate > best.avgEngagementRate ? current : best
  );

  return {
    totalPosts: posts.length,
    totalEngagement,
    totalReach,
    totalImpressions,
    bestPerformingType: bestType.type,
    totalViews,
    totalLikes,
    totalComments,
    totalShares,
    totalSaves,
    posts,
    stats,
  };
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
}
