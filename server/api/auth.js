import { request } from "~/utils/api"

export default defineEventHandler(async event => {
  const data = await readBody(event)

  const uri = '/auth/login'
  const header = {
    method: 'POST',
    body: data,
    headers: { 'Content-Type': 'application/json' }
  }

  return await request(uri, header)
})
