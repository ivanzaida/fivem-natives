/**
 * HUD:SET_ABILITY_BAR_VALUE
 *
 * 0x8349F3048B5A74C7

 * 
 * this applies an override indefinitely, so turn it off with an fPercentage of -1 (any negative value)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} percentage
 * @param {number} maxPercentage
 */
export function setAbilityBarValue(percentage: number, maxPercentage: number): void {
	const setAbilityBarValue_result = Citizen.invokeNative<void>('0x8349F3048B5A74C7', percentage, maxPercentage);
	return setAbilityBarValue_result;
}