import { SECRET_INGREDIENT } from "$env/static/private";
import { checkUserExists, findUser } from "$lib/db/databaseUtils";
import { redirect, type ActionFailure, type Actions, type Redirect, type RequestEvent } from "@sveltejs/kit";
import jwt from "jsonwebtoken";
export const actions: Actions = {
  default: async ({request, cookies}:RequestEvent): Promise<User|ActionFailure<User> | Redirect | undefined> => {
    const formData = await request.formData()
    const username = formData.get('username')
    const password = formData.get('password')

    try {
      if(!username || !password)
      {
        console.log("Missing required fields")
        return
      }
      const exists = checkUserExists(username.toString())
      if(!exists)
      {
        console.log("User doesn't exist")
        return
      }
      const token = jwt.sign(exists as string, SECRET_INGREDIENT)
      cookies.set('authToken', token, {path: '/', httpOnly: true, sameSite: 'strict', maxAge: 60 * 60 * 24 * 7})
      throw(redirect(302, '/'))
    }

    finally {
      console.log("Attempted to login user")
    }
  }
}