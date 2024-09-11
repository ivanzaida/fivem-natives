/**
 * HUD:SET_INSIDE_VERY_SMALL_INTERIOR
 *
 * 0xB9485211BF50817B

 * 
 * ------------------------------------------------------------------
 * @param {boolean} verySmallInterior
 */
export function setInsideVerySmallInterior(verySmallInterior: boolean): void {
	const setInsideVerySmallInterior_result = Citizen.invokeNative<void>('0xB9485211BF50817B', verySmallInterior);
	return setInsideVerySmallInterior_result;
}