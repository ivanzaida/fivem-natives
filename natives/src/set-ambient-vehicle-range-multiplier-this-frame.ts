/**
 * VEHICLE:SET_AMBIENT_VEHICLE_RANGE_MULTIPLIER_THIS_FRAME
 *
 * 0x5D50773C51925144

 * 
 * Applies a multiplier to the default ranges used for creation/removal of vehicles
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} rangeMultiplier
 */
export function setAmbientVehicleRangeMultiplierThisFrame(rangeMultiplier: number): void {
	const setAmbientVehicleRangeMultiplierThisFrame_result = Citizen.invokeNative<void>('0x5D50773C51925144', rangeMultiplier);
	return setAmbientVehicleRangeMultiplierThisFrame_result;
}