import { IReportsData } from '@/types/interface/serviceCallInterface';
import { TBodyGenerateReports } from '@/types/types/serviceCallTypes';
import apiClient from '@/utils/apiClient';

export const reports = (data: TBodyGenerateReports): any => {
  return apiClient<IReportsData>({ url: '/api/generateReportsList/', method: 'post', data }).then(
    res => {
      let normalizeData = {};
      let type = '';

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
              [cur.projectId]: [...acc[cur.projectId], cur],
            };
          } else {
            acc = {
              ...acc,
              [cur.projectId]: [cur],
            };
          }
          return acc;
        }, {});
      }

      if (data.gatewayId && data.projectId) {
        type = 'oneP-oneG';
      } else if (data.gatewayId && !data.projectId) {
        type = 'allP-oneG';
      } else if (!data.gatewayId && data.projectId){
        type = 'oneP-allG';
      } else {
        type = 'allP-allG';
      }

      return { ...normalizeData, type };
    },
  );
};
