/**
 * VEHICLE:_GET_VEHICLE_CURRENT_REV_RATIO
 *
 * 0xF9DDA40BC293A61E

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getVehicleCurrentRevRatio(): number {
	const getVehicleCurrentRevRatio_result = Citizen.invokeNative<number>('0xF9DDA40BC293A61E', );
	return getVehicleCurrentRevRatio_result;
}