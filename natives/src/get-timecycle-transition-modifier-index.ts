/**
 * GRAPHICS:GET_TIMECYCLE_TRANSITION_MODIFIER_INDEX
 *
 * 0x765B41E82372AA97

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getTimecycleTransitionModifierIndex(): number {
	const getTimecycleTransitionModifierIndex_result = Citizen.invokeNative<number>('0x765B41E82372AA97', );
	return getTimecycleTransitionModifierIndex_result;
}