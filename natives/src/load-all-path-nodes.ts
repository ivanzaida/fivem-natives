/**
 * PATHFIND:LOAD_ALL_PATH_NODES
 *
 * 0x10564B8977071406

 * 
 * ------------------------------------------------------------------
 * @param {boolean} set
 * @returns {boolean}  
 */
export function loadAllPathNodes(set: boolean): boolean {
	const loadAllPathNodes_result = Citizen.invokeNative<boolean>('0x10564B8977071406', set);
	return loadAllPathNodes_result;
}