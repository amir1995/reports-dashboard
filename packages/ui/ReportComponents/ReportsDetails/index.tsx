import { useGetFetchQuery } from 'hooks';
import React, { useMemo, useState } from 'react';
import { allP_allGColumn, normalTableColumn } from 'tasks/constant/reportsTableColumns';
import { TDropDownItem, TReportsType } from 'tasks/types/types/dataTypes';
import { TGatewayItem, TProjectItem } from 'tasks/types/types/serviceCallTypes';
import { calcTotalAmount } from 'tasks/utils/calcTotalAmount';
import { renderReportAccordionTitle } from 'tasks/utils/renderReportAccordionTitle';
import { renderReportFooterText } from 'tasks/utils/renderReportFooterText';

import { Accordion } from '../../Accordion';
import { Card } from '../../Card';
import { Table } from '../../Table';
import { ReportFooterCard } from '../ReportFooterCard';
import { ReportsType } from '../ReportsType';

type TReportsDetails = {
  reportType: TReportsType;
  reportData: any;
  error: unknown;
  isLoading: boolean;
  isSuccess: boolean;
  selectedGateway: TDropDownItem;
  selectedProject: TDropDownItem;
};

export const ReportsDetails = (props: TReportsDetails) => {
  const { reportType, reportData, isLoading, isSuccess, error, selectedGateway, selectedProject } =
    props;

  const columns = useMemo(
    () => (reportType === 'allP-allG' ? allP_allGColumn : normalTableColumn),
    [reportType],
  );
  const tableData = useMemo(() => reportData, [reportData]);
  const projectsList: TProjectItem[] = useGetFetchQuery<TProjectItem[]>(['projectsList']);
  const gatewaysList: TGatewayItem[] = useGetFetchQuery<TGatewayItem[]>(['gatewaysList']);

  const [selectedIndex, setSelectedIndex] = useState('2');

  return (
    <>
      <Card className="mt-6.75">
        <ReportsType
          reportType={reportType}
          projectName={selectedProject.label}
          gatewayName={selectedGateway.label}
        />
        {Object.keys(reportData)
          .reverse()
          .map((item, index) =>
            typeof tableData[item] !== 'string' ? (
              <Accordion
                title={renderReportAccordionTitle({
                  type: reportType,
                  currentItemId: item,
                  projectsList,
                  gatewaysList,
                })}
                index={index.toString()}
                detail={calcTotalAmount(tableData[item])}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
                canShowHeader={reportType !== 'oneP-oneG'}
              >
                <Table
                  columns={columns}
                  tableData={reportData[item]}
                  error={error}
                  isLoading={isLoading}
                  isSuccess={isSuccess}
                />
              </Accordion>
            ) : (
              <></>
            ),
          )}
      </Card>
      <ReportFooterCard
        text={renderReportFooterText({
          reportType,
          totalAmount: tableData.totalAmount,
        })}
      />
    </>
  );
};
