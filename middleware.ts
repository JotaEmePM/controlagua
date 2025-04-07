import { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const hostname = req.headers.get('host')!
    const subdomain = hostname.split('.')[0]

    if(subdomain || subdomain === '') req.headers.set('x-subdomain', 'test')
        
    req.headers.set('x-subdomain', subdomain)
}