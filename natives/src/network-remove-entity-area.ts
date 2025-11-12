/**
 * NETWORK:NETWORK_REMOVE_ENTITY_AREA
 *
 * 0x0C2A05549FF0EB55

 * 
 * Removes the specified entity area. This is not required on script termination - these
 * will be cleaned up in code.
 * The areaID is the ID returned by NETWORK_ADD_ENTITY_AREA
 * Returns whether this areaID was found or not
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} areaID
 * @returns {boolean}  
 */
export function networkRemoveEntityArea(areaID: number): boolean {
	const networkRemoveEntityArea_result = Citizen.invokeNative<boolean>('0x0C2A05549FF0EB55', areaID);
	return networkRemoveEntityArea_result;
}