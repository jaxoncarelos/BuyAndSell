import { SECRET_INGREDIENT } from '$env/static/private';
import { checkUserExists, findUser } from '$lib/db/databaseUtils';
import {
	redirect,
	type ActionFailure,
	type Actions,
	type Redirect,
	type RequestEvent,
  type Cookies
} from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
export async function load({ cookies }: {cookies: Cookies}) {
	const authToken = cookies.get('authToken');
	if (!authToken) return { clearUser: true };
	return { clearUser: false };
}
export const actions: Actions = {
	default: async ({
		request,
		cookies
	}: RequestEvent): Promise<User | ActionFailure<User> | Redirect | undefined | string> => {
		const formData = await request.formData();
		const username = formData.get('username');
		const password = formData.get('password');

		try {
			if (!username || !password) {
				return 'Missing required fields';
			}
			const exists = checkUserExists(username.toString());
			if (!exists) {
				return 'User and password combo does not exist';
			}
			const user = await findUser(exists.toString());
			if (!user) return 'Error finding user';
			const passwordMatch = await bcryptjs.compare(password.toString(), user.password!);
			if (!passwordMatch) return 'User and password combo does not exist';
			const token = jwt.sign({ id: exists }, SECRET_INGREDIENT, { expiresIn: '7d' });

			cookies.set('authToken', token, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				maxAge: 60 * 60 * 24 * 7
			});
			throw redirect(302, '/');
		} finally {
			console.log('Attempted to login user');
		}
	}
};
