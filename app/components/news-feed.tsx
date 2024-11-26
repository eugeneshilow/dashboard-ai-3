import { NewsItem, newsData } from '../data/news-data';

export function NewsFeed() {
  return (
    <div className="w-[400px]">
      <h2 className="text-2xl font-bold mb-4">Latest AI News</h2>
      <div className="space-y-6">
        {newsData.map((news: NewsItem, index: number) => (
          <div key={index} className="border-b pb-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-semibold">{news.title}</h3>
              <span className="text-sm text-gray-500">{news.date}</span>
            </div>
            <ul className="text-sm text-gray-600 list-disc pl-4">
              {news.points.map((point: string, idx: number) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <p className="text-xs text-gray-400 mt-1">Source: {news.source}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 