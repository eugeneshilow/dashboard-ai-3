'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { marketData } from '../data/market-data';

export function MarketChart() {
  return (
    <div className="flex-1">
      <h2 className="text-2xl font-bold mb-4">Market Size Growth</h2>
      <div className="w-full h-[600px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={marketData}>
            <XAxis dataKey="year" />
            <YAxis label={{ value: 'in billion USD', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="NLP" name="Natural Language Processing" stackId="a" fill="#82ca9d" />
            <Bar dataKey="MachineLearning" name="Machine Learning" stackId="a" fill="#ffc658" />
            <Bar dataKey="ComputerVision" name="Computer Vision" stackId="a" fill="#8884d8" />
            <Bar dataKey="Autonomous" name="Autonomous & Sensor Technology" stackId="a" fill="#000000" />
            <Bar dataKey="AIRobotics" name="AI Robotics" stackId="a" fill="red" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 