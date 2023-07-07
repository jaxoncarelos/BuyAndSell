import { SECRET_INGREDIENT } from "$env/static/private";
import { likePost } from "$lib/db/databaseUtils";
import { redirect } from "@sveltejs/kit";
import jwt from "jsonwebtoken";

export async function POST({ request, cookies }) {
  const postId = await request.json();
  const authToken = cookies.get("authToken");
  if (!authToken) {
    return Response.redirect("/login");
  }
  const claims: any = jwt.verify(authToken, SECRET_INGREDIENT);
  if (!claims) {
    throw redirect(305, "/login");
  }
  const result = likePost(claims.id.toString(), postId.id);
  return new Response(JSON.stringify({ success: result }));
}
