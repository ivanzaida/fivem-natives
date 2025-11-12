/**
 * NETWORK:NETWORK_ENTITY_AREA_HAVE_ALL_REPLIED
 *
 * 0x31B34E18DE46CC94

 * 
 * Checks if all players have replied to say whether this area is occupied or not
 * The areaID is the ID returned by NETWORK_ADD_ENTITY_AREA
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} areaID
 * @returns {boolean}  
 */
export function networkEntityAreaHaveAllReplied(areaID: number): boolean {
	const networkEntityAreaHaveAllReplied_result = Citizen.invokeNative<boolean>('0x31B34E18DE46CC94', areaID);
	return networkEntityAreaHaveAllReplied_result;
}