/**
 * GRAPHICS:GET_SCREENBLUR_FADE_CURRENT_TIME
 *
 * 0x6C91BB4DA2CAE9B1

 * 
 * Returns the current time (in milliseconds of the fade effect).
 * Returns 0 if no fade was active
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getScreenblurFadeCurrentTime(): number {
	const getScreenblurFadeCurrentTime_result = Citizen.invokeNative<number>('0x6C91BB4DA2CAE9B1', );
	return getScreenblurFadeCurrentTime_result;
}