/**
 * NETWORK:NETWORK_ADD_CLIENT_ENTITY_AREA
 *
 * 0xE5870024C848E72D

 * 
 * Adds an entity area with the specified start and end points that will be cleaned up when the player that created it leaves the session
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
 * @returns {number}  
 */
export function networkAddClientEntityArea(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number): number {
	const networkAddClientEntityArea_result = Citizen.invokeNative<number>('0xE5870024C848E72D', startX, startY, startZ, endX, endY, endZ);
	return networkAddClientEntityArea_result;
}