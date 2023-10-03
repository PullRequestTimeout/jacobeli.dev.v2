import { dev } from "$app/environment";

/** @type {import('./$types').PageLoad} */
export function load() {
	const imageFiles = import.meta.glob("/static/assets/treehugger/*.jpg", {
		as: "url",
		eager: true
	});

	const imageFilePaths = Object.values(imageFiles);
	const imgNumberArray = [];
	imageFilePaths.forEach((str) => {
		// This removes everything in the string up to and including "DSC".
		// It will work for the first 9999 photos I take I guess, then I'll find out my camera's naming convention is onwards
		const pad = str.search("DSC");
		const removedPad = str.slice(pad + 3);
		if (dev) {
			const noRearPad = removedPad.slice(0, -4);
			imgNumberArray.push(noRearPad);
		} else {
			// This strips the generated sveltekit identifyer
			const noRearPad = removedPad.slice(0, -13);
			imgNumberArray.push(noRearPad);
		}
	});

	return {
		imgNumberArray
	};
}

export const ssr = false;
