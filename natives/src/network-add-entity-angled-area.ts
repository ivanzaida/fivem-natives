/**
 * NETWORK:NETWORK_ADD_ENTITY_ANGLED_AREA
 *
 * 0x3E1222B4C1E92A7A

 * 
 * Adds an entity angled area with the specified start and end points
 * The return value is a script ID that can be used to refer to the same entity area again
 * 
 * To remove, see: NETWORK_REMOVE_ENTITY_AREA
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
 * @param {number} areaWidth
 * @returns {number}  
 */
export function networkAddEntityAngledArea(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, areaWidth: number): number {
	const networkAddEntityAngledArea_result = Citizen.invokeNative<number>('0x3E1222B4C1E92A7A', startX, startY, startZ, endX, endY, endZ, areaWidth);
	return networkAddEntityAngledArea_result;
}