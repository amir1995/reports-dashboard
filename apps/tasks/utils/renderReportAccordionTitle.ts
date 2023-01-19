import { TReportsType } from '@/types/types/dataTypes';
import { TGatewayItem, TProjectItem } from '@/types/types/serviceCallTypes';

type TRenderReportAccordionTitleProps = {
  type: TReportsType;
  currentItemId: string;
  projectsList: TProjectItem[];
  gatewaysList: TGatewayItem[];
};

export function renderReportAccordionTitle(props: TRenderReportAccordionTitleProps): string {
  const { type, currentItemId, projectsList, gatewaysList } = props;
  if (type === 'allP-oneG' || type === 'allP-allG') {
    return projectsList.find(item => item.projectId === currentItemId).name;
  } else if (type === 'oneP-allG') {
    return gatewaysList.find(item => item.gatewayId === currentItemId).name;
  }
}
