/**
 * NETWORK:NETWORK_ADD_CLIENT_ENTITY_ANGLED_AREA
 *
 * 0x48FE6369FE249FD2

 * 
 * Adds an entity angled area with the specified start and end points that will be cleaned up when the player that created it leaves the session
 * The return value is a script ID that can be used to refer to the same entity area again
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} startX
 * @param {number} startY
 * @param {number} startZ
 * @param {number} endX
 * @param {number} endY
 * @param {number} endZ
 * @param {number} areaWidth
 * @returns {number}  
 */
export function networkAddClientEntityAngledArea(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, areaWidth: number): number {
	const networkAddClientEntityAngledArea_result = Citizen.invokeNative<number>('0x48FE6369FE249FD2', startX, startY, startZ, endX, endY, endZ, areaWidth);
	return networkAddClientEntityAngledArea_result;
}