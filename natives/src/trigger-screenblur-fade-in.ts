/**
 * GRAPHICS:TRIGGER_SCREENBLUR_FADE_IN
 *
 * 0xC9C9496CFAAB8396

 * 
 * Gradually blurs the screen along Duration (in milliseconds)
 * Once the fade in finishes, the screen will stay blurred until
 * TRIGGER_SCREENBLUR_FADE_OUT or DISABLE_SCREENBLUR_FADE is called
 * 
 * time in ms to transition to fully blurred screen
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} duration
 * @returns {boolean}  
 */
export function triggerScreenblurFadeIn(duration: number): boolean {
	const triggerScreenblurFadeIn_result = Citizen.invokeNative<boolean>('0xC9C9496CFAAB8396', duration);
	return triggerScreenblurFadeIn_result;
}