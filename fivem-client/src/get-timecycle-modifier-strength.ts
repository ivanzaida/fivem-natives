/**
 * CFX:GET_TIMECYCLE_MODIFIER_STRENGTH
 *
 * 0XBE54124A

 * A getter for [SET_TIMECYCLE_MODIFIER_STRENGTH](#_0x82E7FFCD5B2326B3).
 * 
 * ------------------------------------------------------------------
 * @returns {number}  Returns current timecycle modifier strength.
 */
export function getTimecycleModifierStrength(): number {
	const getTimecycleModifierStrength_result = Citizen.invokeNative<number>('0XBE54124A', );
	return getTimecycleModifierStrength_result;
}