/**
 * GRAPHICS:SET_TRANSITION_OUT_OF_TIMECYCLE_MODIFIER
 *
 * 0x20C160A285F3529C

 * 
 * Start a transition out of the currently active script modifier.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} time
 */
export function setTransitionOutOfTimecycleModifier(time: number): void {
	const setTransitionOutOfTimecycleModifier_result = Citizen.invokeNative<void>('0x20C160A285F3529C', time);
	return setTransitionOutOfTimecycleModifier_result;
}