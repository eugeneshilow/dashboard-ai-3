export interface MarketData {
  year: string;
  AIRobotics: number;
  Autonomous: number;
  ComputerVision: number;
  MachineLearning: number;
  NLP: number;
  Total: number;
}

export const marketData: MarketData[] = [
  { year: '2020', AIRobotics: 4.99, Autonomous: 15.74, ComputerVision: 9.62, MachineLearning: 49.54, NLP: 13.38, Total: 93.27 },
  { year: '2021', AIRobotics: 6.83, Autonomous: 31.47, ComputerVision: 23.46, MachineLearning: 120.8, NLP: 20.07, Total: 202.6 },
  { year: '2022', AIRobotics: 9.34, Autonomous: 17.23, ComputerVision: 17.16, MachineLearning: 64.06, NLP: 17.01, Total: 124.8 },
  { year: '2023', AIRobotics: 12.68, Autonomous: 20.22, ComputerVision: 22.12, MachineLearning: 50.86, NLP: 30.06, Total: 135.9 },
  { year: '2024', AIRobotics: 17.03, Autonomous: 25.51, ComputerVision: 25.80, MachineLearning: 79.29, NLP: 36.42, Total: 184.0 },
  { year: '2025', AIRobotics: 22.52, Autonomous: 30.51, ComputerVision: 29.27, MachineLearning: 113.1, NLP: 48.31, Total: 243.7 },
  { year: '2026', AIRobotics: 29.16, Autonomous: 35.25, ComputerVision: 32.57, MachineLearning: 159.8, NLP: 63.35, Total: 320.1 },
  { year: '2027', AIRobotics: 36.78, Autonomous: 39.77, ComputerVision: 35.71, MachineLearning: 221.7, NLP: 81.67, Total: 415.6 },
  { year: '2028', AIRobotics: 44.96, Autonomous: 44.07, ComputerVision: 38.70, MachineLearning: 298.7, NLP: 102.8, Total: 529.2 },
  { year: '2029', AIRobotics: 54.20, Autonomous: 49.15, ComputerVision: 42.39, MachineLearning: 394.0, NLP: 128.0, Total: 667.7 },
  { year: '2030', AIRobotics: 64.35, Autonomous: 55.25, ComputerVision: 46.96, MachineLearning: 503.4, NLP: 156.8, Total: 826.7 }
]; 