/**
 * NETWORK:NETWORK_ENTITY_AREA_DOES_EXIST
 *
 * 0x8256312AC2E5471D

 * 
 * Checks if areaID is valid and points to an existing entityArea
 * The areaID is the ID returned by NETWORK_ADD_ENTITY_AREA
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} areaID
 * @returns {boolean}  
 */
export function networkEntityAreaDoesExist(areaID: number): boolean {
	const networkEntityAreaDoesExist_result = Citizen.invokeNative<boolean>('0x8256312AC2E5471D', areaID);
	return networkEntityAreaDoesExist_result;
}