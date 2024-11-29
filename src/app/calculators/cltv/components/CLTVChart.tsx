"use client";
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface CLTVChartProps {
  annualRevenue: number;
  relationshipYears: number;
  acquisitionCost: number;
}

export function CLTVChart({ annualRevenue, relationshipYears, acquisitionCost }: CLTVChartProps) {
  const generateChartData = () => {
    const data = [];
    for (let year = 1; year <= relationshipYears; year++) {
      const revenue = annualRevenue * year;
      const profit = revenue - acquisitionCost;
      data.push({
        year: `Year ${year}`,
        revenue,
        profit
      });
    }
    return data;
  };

  const chartData = generateChartData();

  return (
    <div className="h-[400px] w-full mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip formatter={(value) => `$${value}`} />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="#4F46E5" 
            name="Cumulative Revenue"
            strokeWidth={2}
          />
          <Line 
            type="monotone" 
            dataKey="profit" 
            stroke="#10B981" 
            name="Cumulative Profit"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}