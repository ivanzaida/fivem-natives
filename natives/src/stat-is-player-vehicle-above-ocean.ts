/**
 * STATS:STAT_IS_PLAYER_VEHICLE_ABOVE_OCEAN
 *
 * 0xF03AFB81ECD7494E

 * 
 * Or non-flyable area
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function statIsPlayerVehicleAboveOcean(): boolean {
	const statIsPlayerVehicleAboveOcean_result = Citizen.invokeNative<boolean>('0xF03AFB81ECD7494E', );
	return statIsPlayerVehicleAboveOcean_result;
}