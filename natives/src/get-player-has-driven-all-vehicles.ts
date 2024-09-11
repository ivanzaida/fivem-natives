/**
 * STATS:GET_PLAYER_HAS_DRIVEN_ALL_VEHICLES
 *
 * 0xCA63545216190A04

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function getPlayerHasDrivenAllVehicles(): boolean {
	const getPlayerHasDrivenAllVehicles_result = Citizen.invokeNative<boolean>('0xCA63545216190A04', );
	return getPlayerHasDrivenAllVehicles_result;
}