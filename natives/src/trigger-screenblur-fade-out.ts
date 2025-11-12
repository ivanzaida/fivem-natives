/**
 * GRAPHICS:TRIGGER_SCREENBLUR_FADE_OUT
 *
 * 0xB63687B4F0E3E236

 * 
 * time in ms to transition from fully blurred to normal
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} duration
 * @returns {boolean}  
 */
export function triggerScreenblurFadeOut(duration: number): boolean {
	const triggerScreenblurFadeOut_result = Citizen.invokeNative<boolean>('0xB63687B4F0E3E236', duration);
	return triggerScreenblurFadeOut_result;
}