/**
 * MISC:ADD_DISPATCH_SPAWN_ANGLED_BLOCKING_AREA
 *
 * 0xBE01072D0E1EE6DD

 * 
 * Prevents dispatch spawning in the requested area.
 * Returns a handle which can be used to remove the area.
 * Prevents dispatch spawning in the requested area.
 * MAX allowed areas is 2. Let code know if that needs increasing. Shares storage with sphere blocking areas
 * 
 * To remove, see: REMOVE_DISPATCH_SPAWN_BLOCKING_AREA
 * See IS_POINT_IN_ANGLED_AREA for the definition of an angled area.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} startX
 * @param {number} startY
 * @param {number} startZ
 * @param {number} endX
 * @param {number} endY
 * @param {number} endZ
 * @param {number} width
 * @returns {number}  
 */
export function addDispatchSpawnAngledBlockingArea(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, width: number): number {
	const addDispatchSpawnAngledBlockingArea_result = Citizen.invokeNative<number>('0xBE01072D0E1EE6DD', startX, startY, startZ, endX, endY, endZ, width);
	return addDispatchSpawnAngledBlockingArea_result;
}