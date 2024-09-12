/**
 * CFX:SET_SNAKEOIL_FOR_ENTRY
 *
 * 0XA7DD3209

 * 
 * ------------------------------------------------------------------
 * @param {string} name
 * @param {string} path
 * @param {string} data
 */
export function setSnakeoilForEntry(name: string, path: string, data: string): void {
	const setSnakeoilForEntry_result = Citizen.invokeNative<void>('0XA7DD3209', name, path, data);
	return setSnakeoilForEntry_result;
}