/**
 * CFX:GET_AIR_DRAG_MULTIPLIER_FOR_PLAYERS_VEHICLE
 *
 * 0X62FC38D0

 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc The player handle
 * @returns {number}  
 */
export function getAirDragMultiplierForPlayersVehicle(playerSrc: string): number {
	const getAirDragMultiplierForPlayersVehicle_result = Citizen.invokeNative<number>('0X62FC38D0', playerSrc);
	return getAirDragMultiplierForPlayersVehicle_result;
}