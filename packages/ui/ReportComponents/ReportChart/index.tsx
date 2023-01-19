import React from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { COLORS } from 'tasks/constant/chartColor';
import { renderChartPercentText } from 'tasks/utils/renderChartPercentText';

type TReportChart = {
  pieData: { name: string; value: number }[];
};

export default function ReportChart(props: TReportChart) {
  const { pieData } = props;
  return (
    <div className="min-h-130 max-h-130 h-130 z-0 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            data={pieData}
            cy="60%"
            innerRadius={60}
            outerRadius={120}
            label={renderChartPercentText}
            labelLine={false}
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend iconSize={15} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
