/**
 * MISC:SET_CLOUDS_ALPHA
 *
 * 0xC05F48B1C4FD8BC9

 * 
 * Set cloud hats alpha. from 0.0 to 1.0.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} paramAlpha
 */
export function setCloudsAlpha(paramAlpha: number): void {
	const setCloudsAlpha_result = Citizen.invokeNative<void>('0xC05F48B1C4FD8BC9', paramAlpha);
	return setCloudsAlpha_result;
}