import type { NextApiRequest, NextApiResponse } from 'next';

import { baseUrl } from '@/config';
import { IReportsData } from '@/types/interface/serviceCallInterface';
import apiClient from '@/utils/apiClient';

export default async function generateReportsList(
  req: NextApiRequest,
  res: NextApiResponse<IReportsData>,
) {
  await apiClient<IReportsData>({
    url: `${baseUrl}report`,
    method: 'post',
    data: req.body,
  })
    .then(r => {
      return res.status(r.code).json(r);
    })
    .catch(err => {
      return res.status(err.code).json(err);
    });
}
