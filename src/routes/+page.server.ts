import { getPosts } from '$lib/db/databaseUtils';

export async function load({ locals }) {
	let posts = getPosts();
	return {
		authedUser: locals.user,
		posts: posts
	};
}
