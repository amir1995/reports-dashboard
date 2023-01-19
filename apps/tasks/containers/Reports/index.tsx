import { useQuery } from '@tanstack/react-query';
import React, { useMemo, useState } from 'react';
import { TDropDownItem } from 'tasks/types/types/dataTypes';
import {
  TBodyGenerateReports,
  TGatewayItem,
  TProjectItem,
} from 'tasks/types/types/serviceCallTypes';
import { normalizeDataBasedDropDown } from 'tasks/utils/normalizeDataBasedDropDown';
import { Loader, NoData, ReportHeader, ReportsDetails } from 'ui';

import { reports } from '@/services/generateReportsList';

type TReportsProps = {
  projectsData: TProjectItem[];
  gatewaysData: TGatewayItem[];
};

export const Reports = (props: TReportsProps) => {
  const { projectsData, gatewaysData } = props;

  const [selectedProject, setSelectedProject] = useState<TDropDownItem>({
    label: 'Select project',
    id: 'all',
  });
  const [selectedGateway, setSelectedGateway] = useState<TDropDownItem>({
    label: 'Select gateway',
    id: 'all',
  });
  const [selectedFromDate, setSelectedFromDate] = useState<string>('2021-01-01');
  const [selectedToDate, setSelectedToDate] = useState<string>('2021-12-31');

  const normalizedProjectsData = useMemo(
    () => normalizeDataBasedDropDown(projectsData, 'projectId'),
    [projectsData],
  );

  const normalizedGatewaysData = useMemo(
    () => normalizeDataBasedDropDown(gatewaysData, 'gatewayId'),
    [gatewaysData],
  );

  const { error, isLoading, isSuccess, isFetching, data, refetch } = useQuery(
    ['reports', selectedProject, selectedGateway, selectedToDate, selectedFromDate],
    () => {
      const normalizeReportsBodyData: TBodyGenerateReports = {
        from: selectedFromDate,
        to: selectedToDate,
        ...(selectedProject.id !== 'all' ? { projectId: selectedProject.id } : {}),
        ...(selectedGateway.id !== 'all' ? { gatewayId: selectedGateway.id } : {}),
      };
      return reports(normalizeReportsBodyData);
    },
    {
      enabled: false,
    },
  );

  return (
    <div className="flex flex-col">
      <ReportHeader
        projectsData={normalizedProjectsData}
        gatewaysData={normalizedGatewaysData}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        selectedGateway={selectedGateway}
        setSelectedGateway={setSelectedGateway}
        setSelectedFromDate={setSelectedFromDate}
        selectedFromDate={selectedFromDate}
        setSelectedToDate={setSelectedToDate}
        selectedToDate={selectedToDate}
        fetchReports={refetch}
      />
      {isLoading && isFetching ? (
        <Loader />
      ) : data?.type ? (
        <ReportsDetails
          reportType={data.type}
          reportData={data}
          error={error}
          isLoading={isLoading}
          isSuccess={isSuccess}
          selectedProject={selectedProject}
          selectedGateway={selectedGateway}
        />
      ) : (
        <NoData />
      )}
    </div>
  );
};
