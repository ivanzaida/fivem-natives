/**
 * OBJECT:SET_PICKUP_GENERATION_RANGE_MULTIPLIER
 *
 * 0x234E9925E93F6A5A

 * 
 * ------------------------------------------------------------------
 * @param {number} multiplier
 */
export function setPickupGenerationRangeMultiplier(multiplier: number): void {
	const setPickupGenerationRangeMultiplier_result = Citizen.invokeNative<void>('0x234E9925E93F6A5A', multiplier);
	return setPickupGenerationRangeMultiplier_result;
}