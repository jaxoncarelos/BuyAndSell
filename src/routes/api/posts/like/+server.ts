import jwt from 'jsonwebtoken'

export async function POST({ request, cookies }) {
  const authToken = cookies.get('authToken')
  if(!authToken) {
    return Response.redirect('/login')
  }
  const claims = 
  return Response.redirect('/')
}