// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ComponentHealthCheck } from '@/interfaces/healthcheck/ComponentHealthCheck';
import { checkDB } from '@/services/database';
import type { NextApiRequest, NextApiResponse } from 'next';



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ComponentHealthCheck[]>,
) {
  if(req.method === 'GET') {
    const webComponent : ComponentHealthCheck = {
      name: 'WEB',
      result: 'OK'
    }

    const mongoComponent : ComponentHealthCheck = {
      name: 'DATABASE',
      result: 'OK'
    }

    const resultMongo = await checkDB()

    mongoComponent.result = resultMongo.success ? 'OK': 'ERROR'
    mongoComponent.message = resultMongo.success ? '': resultMongo.error?.message


    res.status(200).json([
        webComponent,
        {
            name: 'DATABASE',
            result: 'OK'
        }
    ]);
  }   
}
