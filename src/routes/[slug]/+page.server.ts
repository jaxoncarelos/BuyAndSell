import { checkUserExists, findUser, getPostsByUser } from '$lib/db/databaseUtils';

export async function load({ params }) {
	const userExists = checkUserExists(params.slug);
	const posts = getPostsByUser(userExists as string);
	return {
		posts: posts
	};
}
