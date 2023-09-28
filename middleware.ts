import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export  async function  middleware  (request: NextRequest) {

  console.log(request);
  const aNumber = await fetch(`/api/randomNumber/`)
  return NextResponse.json({aNumber},{status:200})
}