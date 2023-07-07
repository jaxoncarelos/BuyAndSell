import { redirect, type Cookies } from "@sveltejs/kit";
export function load({ cookies }: { cookies: Cookies }) {
  cookies.set("authToken", "", { maxAge: 0 });
  throw redirect(302, "/login");
}
