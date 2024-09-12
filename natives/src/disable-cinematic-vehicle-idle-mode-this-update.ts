/**
 * CAM:DISABLE_CINEMATIC_VEHICLE_IDLE_MODE_THIS_UPDATE
 *
 * 0x59ABC1F373CE1F5B

 * 
 * ------------------------------------------------------------------
 */
export function disableCinematicVehicleIdleModeThisUpdate(): void {
	const disableCinematicVehicleIdleModeThisUpdate_result = Citizen.invokeNative<void>('0x59ABC1F373CE1F5B', );
	return disableCinematicVehicleIdleModeThisUpdate_result;
}