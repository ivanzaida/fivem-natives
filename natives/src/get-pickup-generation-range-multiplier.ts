/**
 * OBJECT:GET_PICKUP_GENERATION_RANGE_MULTIPLIER
 *
 * 0x2AD9C2DC3976B552

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getPickupGenerationRangeMultiplier(): number {
	const getPickupGenerationRangeMultiplier_result = Citizen.invokeNative<number>('0x2AD9C2DC3976B552', );
	return getPickupGenerationRangeMultiplier_result;
}