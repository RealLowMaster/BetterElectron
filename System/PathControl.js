
export const PATH_NAME = [
	'dirName',
	'app',
	'appData',
	'cache',
	'crashDumps',
	'desktop',
	'documents',
	'downloads',
	'exe',
	'home',
	'module',
	'music',
	'pictures',
	'recent',
	'temp',
	'userData',
	'videos'
]

/**
 * 	Give a string path with short form/name of real pathes
 * @param {string} str
 * @returns {string}
 */
export function ReplacePathNames(str) {
	let s = new String(str)
	const l = PATH_NAME.length
	for (let i = 0; i < l; i++) {
		if (s.includes(PATH_NAME[i])) s = s.replace(/\{s\}/g, app.getPath(s))
	}
	return s
}