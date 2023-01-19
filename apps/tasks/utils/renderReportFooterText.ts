import { TReportsType } from '@/types/types/dataTypes';

type TRenderReportAccordionTitleProps = {
  reportType: TReportsType;
  totalAmount: number;
};

export function renderReportFooterText(props: TRenderReportAccordionTitleProps): string {
  const { reportType, totalAmount } = props;

  if (reportType === 'allP-allG') {
    return `TOTAL: ${totalAmount} USD`
  } else if (reportType === 'allP-oneG') {
    return `GATEWAY TOTAL | ${totalAmount} USD`
  }else if (reportType === 'oneP-oneG') {
    return `TOTAL | ${totalAmount} USD`
  } else {
    return `PROJECT TOTAL | ${totalAmount} USD`
  }
}
