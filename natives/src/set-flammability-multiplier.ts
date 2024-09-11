/**
 * FIRE:SET_FLAMMABILITY_MULTIPLIER
 *
 * 0xBF956145ADC1339E

 * 
 * ------------------------------------------------------------------
 * @param {number} multiplier
 */
export function setFlammabilityMultiplier(multiplier: number): void {
	const setFlammabilityMultiplier_result = Citizen.invokeNative<void>('0xBF956145ADC1339E', multiplier);
	return setFlammabilityMultiplier_result;
}