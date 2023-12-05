import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
 
let headers = { 'accept-language': 'en-US,en;q=0.5' }
let languages = new Negotiator({ headers }).languages()
let locales = ['en', 'nl']
let defaultLocale = 'en-US'
 
match(languages, locales, defaultLocale) // -> 'en-US'

function getLocale(request: any) { 
  console.log('request', request) 
  return 'en';
}
 
export async function middleware(request: NextRequest) {
  const { pathname } = request?.nextUrl,
    pathnameHasLocale = locales.some(
      (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

  if (pathnameHasLocale) return;
  
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`

  return Response.redirect(request.nextUrl)
}

export const config = { matcher: ['/((?!_next).*)'] }
