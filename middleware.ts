import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest, res: NextResponse) {
    const hostname = req.headers.get('host')!
    const subdomain = hostname.split('.')[0]


    const requestHeaders = new Headers(req.headers)
    requestHeaders.set('x-hello-from-middleware1', 'hello')

    if(subdomain || subdomain === '') {
        requestHeaders.set('x-subdomain', 'test')
        req.headers.set('x-subdomain', 'test')
        // res.headers.set('x-subdomain', 'test')
    }
        
    req.headers.set('x-subdomain', subdomain)
    requestHeaders.set('x-subdomain', subdomain)
    // res.headers.set('x-subdomain', subdomain)
    console.log(`'x-subdomain': ${subdomain}`)
}