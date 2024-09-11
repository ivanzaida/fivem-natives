/**
 * CFX:GET_PARKED_VEHICLE_DENSITY_MULTIPLIER
 *
 * 0XFF72DF84

 * A getter for [SET_PARKED_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#_0xEAE6DCC7EEE3DB1D).
 * 
 * ------------------------------------------------------------------
 * @returns {number}  Returns parked vehicle density multiplier value.
 */
export function getParkedVehicleDensityMultiplier(): number {
	const getParkedVehicleDensityMultiplier_result = Citizen.invokeNative<number>('0XFF72DF84', );
	return getParkedVehicleDensityMultiplier_result;
}