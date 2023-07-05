import { SECRET_INGREDIENT } from '$env/static/private';
import { createPost } from '$lib/db/databaseUtils';
import type { Actions } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();
		const title = formData.get('title');
		const description = formData.get('description');

		try {
			if (!title || !description) {
				return 'Missing required fields';
			}
			if (title.toString().length > 30) {
				return 'Title is too long';
			}
			const postObj = {
				title: title.toString(),
				description: description.toString()
			};
			const token = cookies.get('authToken');
			if (!token) {
				return 'Not logged in';
			}
			const userId = jwt.verify(token, SECRET_INGREDIENT);
			const post = await createPost(postObj);
		} finally {
		}
	}
};
