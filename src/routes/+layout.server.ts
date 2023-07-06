import type { LayoutServerLoad } from './$types';
export const load: LayoutServerLoad = ({ locals, cookies }) => {
	const authToken = cookies.get('authToken');
	if (!authToken || authToken == '') {
		locals.user = undefined;
		return { user: undefined };
	}
	return { user: locals.user };
};


