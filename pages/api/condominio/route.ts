import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
    if(req.method === 'GET') {
        res.json('Hello world')
    }

    if(req.method === 'POST') {
        res.json('POST HELLO WORLD')
    }
}