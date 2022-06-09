const isDev = process.env.NODE_ENV !== 'production'

export const server = isDev ? 'http://127.0.0.1:3000' : 'https://idkyet.com'

