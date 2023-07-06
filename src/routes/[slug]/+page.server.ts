import { checkUserExists, findUser, getPostsByUser } from '$lib/db/databaseUtils';

export async function load({ params }: {params: {slug: string}}) {
	const userExists = checkUserExists(params.slug.toLowerCase());
  if(!userExists) return false 
	const posts = getPostsByUser(userExists as string);
	return {
		posts: posts as Post[]
	};
}
