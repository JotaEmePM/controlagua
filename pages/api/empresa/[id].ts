import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ id: string }>,
  ) {
    if(req.method === 'GET') {
        const { id } = req.query

        res.status(200).json({id: `hello ${id}`});
    }   
  }
  