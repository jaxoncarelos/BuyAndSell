import { getPosts } from "$lib/db/databaseUtils";

export async function load({ params }) {
    let posts = getPosts();
    console.log(posts)
    return {
      posts: posts,
    }
}
