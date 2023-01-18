import { IGatewaysData } from '@/types/interface/serviceCallInterface';
import apiClient from '@/utils/apiClient';

export const gatewaysList = () => {
  return apiClient<IGatewaysData>({ url: '/api/getGatewaysList/', method: 'get' }).then(res => {
    return res.data;
  });
};
