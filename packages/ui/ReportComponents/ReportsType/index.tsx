import {TReportsType} from "tasks/types/types/dataTypes";

import { Title } from '../../Title';

export const ReportsType = (props: TReportsType) => {
  const { reportType } = props;

  if (reportType === 'oneP-oneG') {
    return <Title title="Project 1 | Gateway 1" titleClassName="text-base text-colour-b4 font-bold mb-8.5" />;
  } else if (reportType === 'allP-oneG') {
    return <Title title="All projects | Gateway 1" titleClassName="text-base text-colour-b4 font-bold mb-8.5" />;
  } else if (reportType === 'oneP-allG') {
    return <Title title="Project 1 | All gateways" titleClassName="text-base text-colour-b4 font-bold mb-8.5" />;
  } else {
    return <Title title="All projects | All gateways" titleClassName="text-base text-colour-b4 font-bold mb-8.5" />;
  }
};
