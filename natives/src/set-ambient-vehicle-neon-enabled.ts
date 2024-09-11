/**
 * VEHICLE:SET_AMBIENT_VEHICLE_NEON_ENABLED
 *
 * 0xCD06D7490DF9B6BA

 * 
 * ------------------------------------------------------------------
 * @param {boolean} enabled
 */
export function setAmbientVehicleNeonEnabled(enabled: boolean): void {
	const setAmbientVehicleNeonEnabled_result = Citizen.invokeNative<void>('0xCD06D7490DF9B6BA', enabled);
	return setAmbientVehicleNeonEnabled_result;
}