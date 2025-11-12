/**
 * PLAYER:SET_LAW_RESPONSE_DELAY_OVERRIDE
 *
 * 0x89BC3C904E08199E

 * 
 * PLAYER::SET_LAW_RESPONSE_DELAY_OVERRIDE(rPtr((&l_122) + 71)); // Found in decompilation
 * 
 * 
 * 
 * In "am_hold_up.ysc" used once:
 * 
 * l_8d._f47 = MISC::GET_RANDOM_FLOAT_IN_RANGE(18.0, 28.0);
 * PLAYER::SET_LAW_RESPONSE_DELAY_OVERRIDE((l_8d._f47));
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} lawResponseDelay
 */
export function setLawResponseDelayOverride(lawResponseDelay: number): void {
	const setLawResponseDelayOverride_result = Citizen.invokeNative<void>('0x89BC3C904E08199E', lawResponseDelay);
	return setLawResponseDelayOverride_result;
}