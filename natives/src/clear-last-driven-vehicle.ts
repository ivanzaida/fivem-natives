/**
 * VEHICLE:CLEAR_LAST_DRIVEN_VEHICLE
 *
 * 0x5314C41B6FA61336

 * 
 * ------------------------------------------------------------------
 */
export function clearLastDrivenVehicle(): void {
	const clearLastDrivenVehicle_result = Citizen.invokeNative<void>('0x5314C41B6FA61336', );
	return clearLastDrivenVehicle_result;
}