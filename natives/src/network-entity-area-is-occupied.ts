/**
 * NETWORK:NETWORK_ENTITY_AREA_IS_OCCUPIED
 *
 * 0xF8EEEE15D7483100

 * 
 * Checks if this area is occupied on any machine
 * The areaID is the ID returned by NETWORK_ADD_ENTITY_AREA
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} areaID
 * @returns {boolean}  
 */
export function networkEntityAreaIsOccupied(areaID: number): boolean {
	const networkEntityAreaIsOccupied_result = Citizen.invokeNative<boolean>('0xF8EEEE15D7483100', areaID);
	return networkEntityAreaIsOccupied_result;
}