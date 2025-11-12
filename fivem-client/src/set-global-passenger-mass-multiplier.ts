/**
 * CFX:SET_GLOBAL_PASSENGER_MASS_MULTIPLIER
 *
 * 0x1C47F6AC

 * 
 * ------------------------------------------------------------------
 * @param {number} massMul Weight of each passenger (not counting the driver) as a percentage of vehicle mass. Is applied to all vehicles. Default value is 0.05
 */
export function setGlobalPassengerMassMultiplier(massMul: number): void {
	const setGlobalPassengerMassMultiplier_result = Citizen.invokeNative<void>('0x1C47F6AC', massMul);
	return setGlobalPassengerMassMultiplier_result;
}