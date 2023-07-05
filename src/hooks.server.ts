import { SECRET_INGREDIENT } from '$env/static/private';
import { findUser } from '$lib/db/databaseUtils';
import { userStore } from '$lib/stores/stores';
import jwt from 'jsonwebtoken';
import type { RequestEvent } from '@sveltejs/kit';
//Thanks consulting ninja
export async function handle({ event, resolve }: { event: RequestEvent; resolve: any }) {
	const authToken = event.cookies.get('authToken');
	try {
		if (!authToken) event.locals.user = undefined;
		const claims = jwt.verify(authToken!, SECRET_INGREDIENT) as string;
		if (!claims) event.locals.user = undefined;
		if (authToken && claims) {
			const user: User = await findUser(claims);
			console.log('Response: ', user);
			if (!user) event.locals.user = undefined;
			const { password, ...rest } = user;

			event.locals.user = rest;
			userStore.set(rest as User);
		}
	} finally {
		return await resolve(event);
	}
}
