import React from 'react';

import { Card } from '../../Card';
import { Title } from '../../Title';

type TReportFooterCardProps = {
  text: string;
};

export const ReportFooterCard = (props: TReportFooterCardProps) => {
  const { text } = props;
  return (
    <Card className="mt-6.75">
      <Title title={text} titleClassName="text-base text-colour-b4 font-bold" />
    </Card>
  );
};
