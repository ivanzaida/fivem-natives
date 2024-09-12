/**
 * CFX:GET_RANDOM_VEHICLE_DENSITY_MULTIPLIER
 *
 * 0x7B0D00C5

 * A getter for [SET_RANDOM_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#_0xB3B3359379FE77D3).Same as vehicle density multiplier.
 * 
 * ------------------------------------------------------------------
 * @returns {number}  Returns random vehicle density multiplier value.
 */
export function getRandomVehicleDensityMultiplier(): number {
	const getRandomVehicleDensityMultiplier_result = Citizen.invokeNative<number>('0x7B0D00C5', );
	return getRandomVehicleDensityMultiplier_result;
}