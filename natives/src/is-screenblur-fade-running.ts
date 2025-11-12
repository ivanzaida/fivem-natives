/**
 * GRAPHICS:IS_SCREENBLUR_FADE_RUNNING
 *
 * 0xF2CF182F5FDA78DF

 * 
 * Returns true if the effect is currently active.
 * The active state means the effect is either fading in or out, or fully faded in.
 * 
 * Returns whether screen transition to blur/from blur is running.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isScreenblurFadeRunning(): boolean {
	const isScreenblurFadeRunning_result = Citizen.invokeNative<boolean>('0xF2CF182F5FDA78DF', );
	return isScreenblurFadeRunning_result;
}