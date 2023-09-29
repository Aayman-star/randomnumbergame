import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export  async function  middleware  (request: NextRequest) {
    // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  console.log(request);
  // const aNumber = await fetch(`${baseUrl}/api/randomNumber`)
  return NextResponse.next()
}