import { MarketChart } from './components/market-chart';
import { NewsFeed } from './components/news-feed';

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-white">
      <h1 className="text-4xl font-bold mb-8 text-center">AI Market Analysis Dashboard</h1>
      <div className="flex gap-8">
        <MarketChart />
        <NewsFeed />
      </div>
    </div>
  );
}