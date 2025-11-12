/**
 * MISC:ADD_DISPATCH_SPAWN_SPHERE_BLOCKING_AREA
 *
 * 0xB33FCD685BC4E12D

 * 
 * Prevents dispatch spawning in the requested area.
 * Returns a handle which can be used to remove the area.
 * Prevents dispatch spawning in the requested area.
 * MAX allowed areas is 2. Let code know if that needs increasing. Shares storage with angled blocking areas
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} centerX
 * @param {number} centerY
 * @param {number} centerZ
 * @param {number} radius
 * @returns {number}  
 */
export function addDispatchSpawnSphereBlockingArea(centerX: number, centerY: number, centerZ: number, radius: number): number {
	const addDispatchSpawnSphereBlockingArea_result = Citizen.invokeNative<number>('0xB33FCD685BC4E12D', centerX, centerY, centerZ, radius);
	return addDispatchSpawnSphereBlockingArea_result;
}