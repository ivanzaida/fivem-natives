/**
 * GRAPHICS:ENABLE_MOON_CYCLE_OVERRIDE
 *
 * 0xF1759D35AF2F023B

 * 
 * The same as SET_TIMECYCLE_MODIFIER_STRENGTH but for the secondary timecycle modifier.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} value
 */
export function enableMoonCycleOverride(value: number): void {
	const enableMoonCycleOverride_result = Citizen.invokeNative<void>('0xF1759D35AF2F023B', value);
	return enableMoonCycleOverride_result;
}