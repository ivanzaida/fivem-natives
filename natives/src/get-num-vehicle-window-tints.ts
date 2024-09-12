/**
 * VEHICLE:GET_NUM_VEHICLE_WINDOW_TINTS
 *
 * 0xAC574D1AAC70DD29

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getNumVehicleWindowTints(): number {
	const getNumVehicleWindowTints_result = Citizen.invokeNative<number>('0xAC574D1AAC70DD29', );
	return getNumVehicleWindowTints_result;
}