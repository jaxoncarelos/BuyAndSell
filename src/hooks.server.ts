import { SECRET_INGREDIENT } from '$env/static/private';
import { findUser } from '$lib/db/databaseUtils';
import jwt from 'jsonwebtoken';
import type { RequestEvent } from '@sveltejs/kit';
//Thanks consulting ninja
export async function handle({ event, resolve }: { event: RequestEvent; resolve: any }) {
	const authToken = event.cookies.get('authToken');
	try {
		if (!authToken) event.locals.user = undefined;
		const claims: any = jwt.verify(authToken!, SECRET_INGREDIENT);
		if (!claims.id) event.locals.user = undefined;
		if (authToken && claims.id) {
			const user: User = findUser(claims.id);
			if (!user) {
				event.locals.user = undefined;
				event.cookies.set('authToken', '', { maxAge: 0 });
			}
			const { password, ...rest } = user;

			event.locals.user = rest;
		}
	} finally {
		return await resolve(event);
	}
}
