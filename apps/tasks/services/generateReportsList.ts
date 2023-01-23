import { IReportsData } from '@/types/interface/serviceCallInterface';
import { TBodyGenerateReports } from '@/types/types/serviceCallTypes';
import apiClient from '@/utils/apiClient';

export const reports = (data: TBodyGenerateReports): any => {

  const normalWayToFormatDate = (date:string): string => {
    // BTW we can use moment js for formatting the date object
    // return moment(date).format('dd.MM.YYYY');
    return date.split('-').reverse().toString().replaceAll(',', '.')
  }
  return apiClient<IReportsData>({ url: '/api/generateReportsList/', method: 'post', data }).then(
    res => {
      let normalizeData = {};
      let type = '';
      let totalAmount = res.data.reduce((acc, cur) => {
        acc = acc + cur.amount;
        return acc;
      }, 0);

      if (!data.gatewayId && data.projectId) {
        normalizeData = res.data.reduce((acc, cur) => {
          if (acc[cur.gatewayId]) {
            acc = {
              ...acc,
              [cur.gatewayId]: [...acc[cur.gatewayId], cur],
            };
          } else {
            acc = {
              ...acc,
              [cur.gatewayId]: [cur],
            };
          }
          return acc;
        }, {});
      } else {
        normalizeData = res.data.reduce((acc, cur) => {
          if (acc[cur.projectId]) {
            acc = {
              ...acc,
              [cur.projectId]: [
                ...acc[cur.projectId],
                {
                  ...cur,
                  created: normalWayToFormatDate(cur.created),
                  modified: normalWayToFormatDate(cur.modified),
                },
              ],
            };
          } else {
            acc = {
              ...acc,
              [cur.projectId]: [
                {
                  ...cur,
                  created: normalWayToFormatDate(cur.created),
                  modified: normalWayToFormatDate(cur.modified),
                },
              ],
            };
          }
          return acc;
        }, {});
      }

      if (data.gatewayId && data.projectId) {
        type = 'oneP-oneG';
      } else if (data.gatewayId && !data.projectId) {
        type = 'allP-oneG';
      } else if (!data.gatewayId && data.projectId) {
        type = 'oneP-allG';
      } else {
        type = 'allP-allG';
      }

      return { ...normalizeData, type, totalAmount: totalAmount.toFixed(3).toString() };
    },
  );
};
