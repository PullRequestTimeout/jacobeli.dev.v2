import { redirect } from "@sveltejs/kit";

// Moved route
export function load() {
	throw redirect(302, "/photos/treehugger");
}
