/**
 * MISC:DISABLE_SCREEN_DIMMING_THIS_FRAME
 *
 * 0x71673481F07D6434

 * 
 * Disables screen dimming for one frame.
 * 
 * Does nothing (it's a nullsub).
 * 
 * 
 * ------------------------------------------------------------------
 */
export function disableScreenDimmingThisFrame(): void {
	const disableScreenDimmingThisFrame_result = Citizen.invokeNative<void>('0x71673481F07D6434', );
	return disableScreenDimmingThisFrame_result;
}