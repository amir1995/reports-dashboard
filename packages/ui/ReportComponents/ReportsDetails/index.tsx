import React from "react";
import {TReportsType} from "tasks/types/types/dataTypes";

import {Card} from "../../Card";
import {ReportsType} from "../ReportsType";

type TReportsDetails = {
  reportType: TReportsType
}
export const ReportsDetails = (props: TReportsType) => {
const {reportType}= props;
  return (
    <Card className="mt-6.75">
      <ReportsType reportType={reportType} />
    </Card>
  )
}
