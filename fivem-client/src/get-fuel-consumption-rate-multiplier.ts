/**
 * CFX:GET_FUEL_CONSUMPTION_RATE_MULTIPLIER
 *
 * 0x5550BF9F

 * 
 * ------------------------------------------------------------------
 * @returns {number}  Current fuel consumption rate multiplier. 0 means that fuel is not consumed.
 */
export function getFuelConsumptionRateMultiplier(): number {
	const getFuelConsumptionRateMultiplier_result = Citizen.invokeNative<number>('0x5550BF9F', );
	return getFuelConsumptionRateMultiplier_result;
}