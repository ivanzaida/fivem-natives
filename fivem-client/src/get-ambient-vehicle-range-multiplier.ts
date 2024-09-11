/**
 * CFX:GET_AMBIENT_VEHICLE_RANGE_MULTIPLIER
 *
 * 0X667EC929

 * A getter for [SET_AMBIENT_VEHICLE_RANGE_MULTIPLIER_THIS_FRAME](#_0x90B6DA738A9A25DA).
 * 
 * ------------------------------------------------------------------
 * @returns {number}  Returns ambient vehicle range multiplier value.
 */
export function getAmbientVehicleRangeMultiplier(): number {
	const getAmbientVehicleRangeMultiplier_result = Citizen.invokeNative<number>('0X667EC929', );
	return getAmbientVehicleRangeMultiplier_result;
}