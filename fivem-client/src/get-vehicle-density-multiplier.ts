/**
 * CFX:GET_VEHICLE_DENSITY_MULTIPLIER
 *
 * 0xEF7C6538

 * A getter for [SET_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#_0x245A6883D966D537).
 * 
 * ------------------------------------------------------------------
 * @returns {number}  Returns vehicle density multiplier value.
 */
export function getVehicleDensityMultiplier(): number {
	const getVehicleDensityMultiplier_result = Citizen.invokeNative<number>('0xEF7C6538', );
	return getVehicleDensityMultiplier_result;
}