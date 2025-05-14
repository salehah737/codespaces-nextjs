import { NextResponse } from 'next/server';

export async function GET() {
  // Basic health check endpoint
  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '2.1.0',
    environment: process.env.NODE_ENV || 'development',
  });
}