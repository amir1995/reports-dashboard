import { TReportsType } from 'tasks/types/types/dataTypes';

import { Title } from '../../Title';

type TReportType = {
  reportType: TReportsType;
  gatewayName: string;
  projectName: string;
};

export const ReportsType = (props: TReportType) => {
  const { reportType, projectName, gatewayName } = props;

  if (reportType === 'oneP-oneG') {
    return (
      <Title
        title={`${projectName} | ${gatewayName}`}
        titleClassName="text-base text-colour-b4 font-bold mb-8.5"
      />
    );
  } else if (reportType === 'allP-oneG') {
    return (
      <Title
        title={`All projects | ${gatewayName}`}
        titleClassName="text-base text-colour-b4 font-bold mb-8.5"
      />
    );
  } else if (reportType === 'oneP-allG') {
    return (
      <Title
        title={`${projectName} | All gateways`}
        titleClassName="text-base text-colour-b4 font-bold mb-8.5"
      />
    );
  } else {
    return (
      <Title
        title="All projects | All gateways"
        titleClassName="text-base text-colour-b4 font-bold mb-8.5"
      />
    );
  }
};
