import {
  checkUserExists,
  getPostsByUser,
} from "$lib/db/databaseUtils";

export async function load({ params }: { params: { slug: string } }): Promise<{posts: Post[]} | boolean> {
  const userExists = checkUserExists(params.slug.toLowerCase());
  if (!userExists) return false;
  const posts = getPostsByUser(userExists as string);
  return {
    posts: posts as Post[],
  };
}
