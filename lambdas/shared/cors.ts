export const ALLOWED_ORIGINS = [
    'http://localhost:5173', // vite local
    'https://tenant-demo.settlus.io',
]
  
export function getCorsHeaders(origin?: string) {
    const allowedOrigin = origin && ALLOWED_ORIGINS.includes(origin) ? origin : '*'
  
    return {
      'Access-Control-Allow-Origin': allowedOrigin,
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST,OPTIONS',
    }
}