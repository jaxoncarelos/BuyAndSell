import type { LayoutServerLoad } from './$types';
export const load: LayoutServerLoad = ({ locals, cookies }) => {
	console.log(locals.user);
	console.log('rerender');
	const authToken = cookies.get('authToken');
	console.log(authToken);
	if (!authToken || authToken == '') {
		locals.user = undefined;
		return { user: undefined };
	}
	return { user: locals.user };
};
