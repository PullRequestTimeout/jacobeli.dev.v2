import { dev } from "$app/environment";

/** @type {import('./$types').PageLoad} */
export function load() {
	const imageFiles = import.meta.glob("./assets/*.jpg", {
		as: "url",
		eager: true
	});

	const imageFilePaths = Object.values(imageFiles);

	const imgObjArr = [];
	imageFilePaths.forEach((url) => {
		// This removes everything in the string up to and including "DSC".
		// It will work for the first 99999 photos I take I guess, then I'll find out my camera's naming convention is onwards
		const pad = url.search("DSC");
		const removedPad = url.slice(pad + 3);
		if (dev) {
			// This strips ".jpg"
			const noRearPad = removedPad.slice(0, -4);
			imgObjArr.push({
				url: url,
				imgNo: noRearPad
			});
		} else {
			// This strips the generated sveltekit identifyer and ".jpg"
			const noRearPad = removedPad.slice(0, -13);
			imgObjArr.push({
				url: url,
				imgNo: noRearPad
			});
		}
	});

	return {
		imgObjArr
	};
}

export const ssr = false;
