/**
 * GRAPHICS:SET_TRANSITION_TIMECYCLE_MODIFIER
 *
 * 0xDA3EE68EF78AA786

 * 
 * Start a transition to a timecycle, either from "nothing" or from the currently active script modifier if there's one.
 * MAKE SURE TO CALL CLEAR_TIMECYCLE_MODIFIER when you're done. If this doesn't happen the game will from that point on use that filter.
 * 
 * Full list of timecycle modifiers by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/timecycleModifiers.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} modifierName
 * @param {number} time
 */
export function setTransitionTimecycleModifier(modifierName: string, time: number): void {
	const setTransitionTimecycleModifier_result = Citizen.invokeNative<void>('0xDA3EE68EF78AA786', modifierName, time);
	return setTransitionTimecycleModifier_result;
}