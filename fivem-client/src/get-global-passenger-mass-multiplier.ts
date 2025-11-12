/**
 * CFX:GET_GLOBAL_PASSENGER_MASS_MULTIPLIER
 *
 * 0x78951816

 * A getter for [SET_GLOBAL_PASSENGER_MASS_MULTIPLIER](#_0x3422291C).
 * 
 * ------------------------------------------------------------------
 * @returns {number}  Returns the mass of each passenger (not counting the driver) as a percentage of vehicle mass. Default value is 0.05
 */
export function getGlobalPassengerMassMultiplier(): number {
	const getGlobalPassengerMassMultiplier_result = Citizen.invokeNative<number>('0x78951816', );
	return getGlobalPassengerMassMultiplier_result;
}