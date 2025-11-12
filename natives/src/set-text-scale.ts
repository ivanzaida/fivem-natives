/**
 * HUD:SET_TEXT_SCALE
 *
 * 0xBFE94E91C83D8794

 * 
 * Size range : 0F to 1.0F
 * p0 is unknown and doesn't seem to have an effect, yet in the game scripts it changes to 1.0F sometimes.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} textXScale
 * @param {number} textYScale
 */
export function setTextScale(textXScale: number, textYScale: number): void {
	const setTextScale_result = Citizen.invokeNative<void>('0xBFE94E91C83D8794', textXScale, textYScale);
	return setTextScale_result;
}