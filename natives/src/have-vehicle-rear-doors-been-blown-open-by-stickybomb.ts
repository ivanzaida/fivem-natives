/**
 * VEHICLE:HAVE_VEHICLE_REAR_DOORS_BEEN_BLOWN_OPEN_BY_STICKYBOMB
 *
 * 0x6B407F2525E93644

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function haveVehicleRearDoorsBeenBlownOpenByStickybomb(): boolean {
	const haveVehicleRearDoorsBeenBlownOpenByStickybomb_result = Citizen.invokeNative<boolean>('0x6B407F2525E93644', );
	return haveVehicleRearDoorsBeenBlownOpenByStickybomb_result;
}