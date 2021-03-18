import { getSimpleNewPage } from './shared';

// Recusive function on currentPage
export const getPreviousPage = (
	components,
	bindings,
	currentPage,
	features
) => {
	console.log(currentPage);
	const newPages = currentPage.split('.');
	const [first, ...rest] = newPages;

	let result = first;
	//2.1
	if (newPages.length > 1) {
		return `${result}.${getPreviousPage(
			components,
			bindings,
			rest.join('.'),
			features
		)}`;
	}
	if (first.includes('#')) {
		// Loop
	} else {
		const newPage = getSimpleNewPage(
			components,
			bindings,
			currentPage,
			features,
			'PREVIOUS'
		);
		// TODO : redirect when new page display Loop
		// TODO: Boarder
		return `${parseInt(newPage, 10)}`;
	}
};
