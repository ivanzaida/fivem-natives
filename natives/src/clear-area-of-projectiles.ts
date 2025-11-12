/**
 * MISC:CLEAR_AREA_OF_PROJECTILES
 *
 * 0xEC73DFE5CE55E19C

 * 
 * flags is usually 0 in the scripts.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} radius
 * @param {boolean} broadcast
 */
export function clearAreaOfProjectiles(posX: number, posY: number, posZ: number, radius: number, broadcast: boolean = false): void {
	const clearAreaOfProjectiles_result = Citizen.invokeNative<void>('0xEC73DFE5CE55E19C', posX, posY, posZ, radius, broadcast);
	return clearAreaOfProjectiles_result;
}