/**
 * CAM:INVALIDATE_CINEMATIC_VEHICLE_IDLE_MODE
 *
 * 0x9136D50973A71229

 * 
 * Resets the vehicle idle camera timer. Calling this in a loop will disable the idle camera.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function invalidateCinematicVehicleIdleMode(): void {
	const invalidateCinematicVehicleIdleMode_result = Citizen.invokeNative<void>('0x9136D50973A71229', );
	return invalidateCinematicVehicleIdleMode_result;
}