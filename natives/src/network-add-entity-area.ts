/**
 * NETWORK:NETWORK_ADD_ENTITY_AREA
 *
 * 0x132F0517E3CE528A

 * 
 * Adds an entity area with the specified start and end points
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
export function networkAddEntityArea(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number): number {
	const networkAddEntityArea_result = Citizen.invokeNative<number>('0x132F0517E3CE528A', startX, startY, startZ, endX, endY, endZ);
	return networkAddEntityArea_result;
}