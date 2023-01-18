import type { NextApiRequest, NextApiResponse } from 'next';

import { baseUrl } from '@/config';
import { IGatewaysData } from '@/types/interface/serviceCallInterface';
import apiClient from '@/utils/apiClient';

export default async function getGatewaysList(
  req: NextApiRequest,
  res: NextApiResponse<IGatewaysData>,
) {
  await apiClient<IGatewaysData>({
    url: `${baseUrl}gateways`,
    method: 'get',
  })
    .then(r => {
      return res.status(r.code).json(r);
    })
    .catch(err => {
      return res.status(err.code).json(err);
    });
}
