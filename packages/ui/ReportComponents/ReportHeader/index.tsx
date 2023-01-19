import React from 'react';
import { texts } from 'tasks/constant/texts';
import { TDropDownItem } from 'tasks/types/types/dataTypes';

import { Button } from '../../Button';
import { DatePicker } from '../../DatePicker';
import { DropDown } from '../../DropDown';
import { Title } from '../../Title';

type TReportHeaderProps = {
  projectsData: TDropDownItem[];
  gatewaysData: TDropDownItem[];
  selectedProject: TDropDownItem | null;
  setSelectedProject: (x: TDropDownItem) => void;
  selectedGateway: TDropDownItem | null;
  setSelectedGateway: (x: TDropDownItem) => void;
  selectedFromDate: string;
  setSelectedFromDate: (x: string) => void;
  selectedToDate: string;
  setSelectedToDate: (x: string) => void;
  fetchReports: (x: any) => void;
};

export const ReportHeader = (props: TReportHeaderProps) => {
  const {
    projectsData,
    gatewaysData,
    setSelectedGateway,
    setSelectedProject,
    selectedGateway,
    selectedProject,
    setSelectedFromDate,
    setSelectedToDate,
    selectedFromDate,
    selectedToDate,
    fetchReports
  } = props;

  return (
    <div className="flex w-full items-center justify-between z-10">
      <Title title={texts.reports} detail={texts.reportsDetail} />
      <div>
        <DropDown
          title="Select project"
          dataItems={projectsData}
          onSelectItem={setSelectedProject}
          selectedItem={selectedProject}
        />
        <DropDown
          title="Select gateway"
          dataItems={gatewaysData}
          onSelectItem={setSelectedGateway}
          selectedItem={selectedGateway}
        />
        <DatePicker
          title="From date"
          selectedDate={selectedFromDate}
          onSelectDate={setSelectedFromDate}
        />
        <DatePicker
          title="To date"
          selectedDate={selectedToDate}
          onSelectDate={setSelectedToDate}
        />
        <Button className="ml-2.75" onClick={() => fetchReports({a: 'hello'})}>Generate Report</Button>
      </div>
    </div>
  );
};
