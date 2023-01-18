import type { NextApiRequest, NextApiResponse } from 'next';

import { baseUrl } from '@/config';
import { IProjectsData } from '@/types/interface/serviceCallInterface';
import apiClient from '@/utils/apiClient';

export default async function getProjectsList(
  req: NextApiRequest,
  res: NextApiResponse<IProjectsData>,
) {
  await apiClient<IProjectsData>({
    url: `${baseUrl}projects`,
    method: 'get',
  })
    .then(r => {
      return res.status(r.code).json(r);
    })
    .catch(err => {
      return res.status(err.code).json(err);
    });
}
