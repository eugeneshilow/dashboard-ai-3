export interface NewsItem {
  title: string;
  date: string;
  points: string[];
  source: string;
}

export const newsData: NewsItem[] = [
  {
    title: "Perplexity Launches Election Information Hub",
    date: "Nov 4, 2024",
    points: [
      "AI-powered election tracking and information system",
      "Partners with AP and Democracy Works for real-time vote counting",
      "Provides polling locations, requirements, and candidate information"
    ],
    source: "The Verge"
  },
  {
    title: "OpenAI Releases GPT-5 Preview",
    date: "Nov 15, 2024",
    points: [
      "10x performance improvement over GPT-4",
      "New multimodal capabilities including video generation",
      "Enhanced reasoning and coding capabilities",
      "Limited preview for enterprise customers"
    ],
    source: "TechCrunch"
  },
  {
    title: "DeepMind's AlphaFold 3 Breakthrough",
    date: "Nov 8, 2024",
    points: [
      "Predicts protein-drug interactions with 99% accuracy",
      "Reduces drug discovery time by 60%",
      "Integration with major pharmaceutical companies",
      "Open-source release planned for 2025"
    ],
    source: "Nature"
  },
  {
    title: "Tesla's New AI-Powered Manufacturing System",
    date: "Nov 12, 2024",
    points: [
      "Fully autonomous factory management system",
      "30% increase in production efficiency",
      "Self-optimizing supply chain integration",
      "Rolling out to all Gigafactories by Q1 2025"
    ],
    source: "Reuters"
  },
  {
    title: "Google's New AI-Powered Search",
    date: "Nov 12, 2024",
    points: [
      "Enhanced search results with AI-generated summaries",
      "Integration with Google's AI-powered assistant",
      "Improved search accuracy and relevance"
    ],
    source: "TechCrunch"
  },
  {
    title: "Microsoft's New AI-Powered Office Suite",
    date: "Nov 12, 2024",
    points: [
      "Enhanced productivity with AI-powered tools",
      "Integration with Microsoft's AI-powered assistant",
      "Improved search accuracy and relevance"
    ],
    source: "TechCrunch"
  },
  {
    title: "US Military Makes First OpenAI Purchase For War Forces",
    date: "Nov 1, 2024",
    points: [
      "AFRICOM buys access to OpenAI tools through Microsoft",
      "Will be used for military intelligence and threat analysis",
      "First confirmed OpenAI purchase by US combat command",
      "Part of $9B Joint Warfighting Cloud contract"
    ],
    source: "The Intercept"
  }
]; 