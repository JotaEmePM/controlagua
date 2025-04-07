// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type ComponentHealthCheck = {
  name: 'WEB' | 'DATABASE'
  result: 'OK' | 'ERROR',
  message?: string
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ComponentHealthCheck[]>,
) {
  if(req.method === 'GET') {
    res.status(200).json([
        {
            name: 'WEB',
            result: 'OK'
        },
        {
            name: 'DATABASE',
            result: 'OK'
        }
    ]);
  }   
}
