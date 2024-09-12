/**
 * CFX:DISABLE_VEHICLE_PASSENGER_IDLE_CAMERA
 *
 * 0X5C140555

 * Disables the game's afk camera that starts panning around after 30 seconds of inactivity(While riding in a car as a passenger)
 * 
 * ------------------------------------------------------------------
 * @param {boolean} state On/Off
 */
export function disableVehiclePassengerIdleCamera(state: boolean): void {
	const disableVehiclePassengerIdleCamera_result = Citizen.invokeNative<void>('0X5C140555', state);
	return disableVehiclePassengerIdleCamera_result;
}