/**
 * CFX:GET_TIMECYCLE_MODIFIER_COUNT
 *
 * 0xFE2A1D4D

 * 
 * ------------------------------------------------------------------
 * @returns {number}  Returns the amount of timecycle modifiers loaded.
 */
export function getTimecycleModifierCount(): number {
	const getTimecycleModifierCount_result = Citizen.invokeNative<number>('0xFE2A1D4D', );
	return getTimecycleModifierCount_result;
}