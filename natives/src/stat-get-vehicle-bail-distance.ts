/**
 * STATS:STAT_GET_VEHICLE_BAIL_DISTANCE
 *
 * 0x282230B7F0E52D56

 * 
 * Travel the furthest distance when bailing from a vehicle
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function statGetVehicleBailDistance(): number {
	const statGetVehicleBailDistance_result = Citizen.invokeNative<number>('0x282230B7F0E52D56', );
	return statGetVehicleBailDistance_result;
}