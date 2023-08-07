import { getPosts } from "$lib/db/databaseUtils";

export async function load({ locals }) {
  let posts = getPosts();
  return {
    authedUser: locals.user,
    posts: posts,
  };
}

import { SECRET_INGREDIENT } from "$env/static/private";
import { createPost, findUser } from "$lib/db/databaseUtils";
import { redirect, type Actions } from "@sveltejs/kit";
import jwt from "jsonwebtoken";

export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const formData = await request.formData();
    const title = formData.get("title");
    const description = formData.get("description");

    try {
      if (!title || !description) {
        return "Missing required fields";
      }
      if (title.toString().length > 30) {
        return "Title is too long";
      }
      const postObj = {
        id: undefined,
        title: title.toString(),
        description: description.toString(),
        likes: 0,
        usersLiked: [],
      };
      const token = cookies.get("authToken");
      if (!token) {
        return "Not logged in";
      }
      const userId: any = jwt.verify(token, SECRET_INGREDIENT);
      if (!userId) {
        return "Invalid token";
      }
      const user = findUser(userId.id.toString());
      createPost(postObj, user);
      throw redirect(302, `/`);
    } finally {
    }
  },
};
