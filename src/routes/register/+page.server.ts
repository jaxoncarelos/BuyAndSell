import { checkUserExists, createUser } from '$lib/db/databaseUtils.js';
import type { Redirect, ActionFailure, RequestEvent, Actions } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import { SECRET_INGREDIENT } from '$env/static/private';
import { goto } from '$app/navigation';

export const actions: Actions = {
	default: async ({
		request,
		cookies
	}: RequestEvent): Promise<User | ActionFailure<User> | Redirect | undefined | string> => {
		const formData = await request.formData();
		const username = formData.get('username');
		const password = formData.get('password');
		const confirmPassword = formData.get('confirmPassword');
		const email = formData.get('email');
		const firstName = formData.get('firstName');
		const lastName = formData.get('lastName');
		try {
			if (!username || !password || !confirmPassword || !email || !firstName || !lastName) {
				return 'Missing required fields';
			}
			if (!(password.toString() == confirmPassword.toString())) {
				return 'Passwords do not match';
			}
			if (checkUserExists(username.toString())) {
				return 'User already exists';
			}

			const tempUser: User = {
				id: undefined,
				username: username.toString(),
				password: await bcryptjs.hash(password.toString(), 10),
				email: email.toString(),
				firstName: firstName.toString(),
				lastName: lastName.toString()
			};
			const user: User = await createUser(tempUser);
			if (!user) throw new Error('Error creating user');

			const token = jwt.sign(user.id!, SECRET_INGREDIENT);
			cookies.set('authToken', token, {
				path: '/'
			});
			throw redirect(302, '/');
		} finally {
		}
	}
};
