/**
 * VEHICLE:_SET_VEHICLE_MAX_LAUNCH_ENGINE_REVS
 *
 * 0x5AE614ECA5FDD423

 * 
 * 0.0f = engine rev minimum
 * 1.0f = engine rev limit
 * 
 * 
 * ------------------------------------------------------------------
 */
export function setVehicleMaxLaunchEngineRevs(): void {
	const setVehicleMaxLaunchEngineRevs_result = Citizen.invokeNative<void>('0x5AE614ECA5FDD423', );
	return setVehicleMaxLaunchEngineRevs_result;
}