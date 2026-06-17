export type ContentType = 'reel' | 'carousel' | 'post';

export interface Post {
  id: string;
  type: ContentType;
  caption: string;
  likes: number;
  comments: number;
  shares: number;
  saves: number;
  views: number;
  reach: number;
  impressions: number;
  engagementRate: number;
  createdAt: Date;
  imageUrl?: string;
}

export interface ContentTypeStats {
  type: ContentType;
  count: number;
  avgLikes: number;
  avgComments: number;
  avgShares: number;
  avgSaves: number;
  avgViews: number;
  avgReach: number;
  avgImpressions: number;
  avgEngagementRate: number;
  totalLikes: number;
  totalComments: number;
  totalShares: number;
  totalSaves: number;
}

export interface DashboardMetrics {
  totalPosts: number;
  totalEngagement: number;
  totalReach: number;
  totalImpressions: number;
  bestPerformingType: ContentType;
  totalViews: number;
  totalLikes: number;
  totalComments: number;
  totalShares: number;
  totalSaves: number;
  posts: Post[];
  stats: ContentTypeStats[];
}
