import React from 'react';

type TRenderChartPercentText= {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
};

const RADIAN = Math.PI / 180;

export const renderChartPercentText = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: TRenderChartPercentText) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + (radius - 15) * Math.cos(-midAngle * RADIAN);
  const y = cy + (radius - 5) * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize="16px"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
