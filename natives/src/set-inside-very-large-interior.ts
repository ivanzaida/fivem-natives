/**
 * HUD:SET_INSIDE_VERY_LARGE_INTERIOR
 *
 * 0x060BB8BC8FFE8213

 * 
 * ------------------------------------------------------------------
 * @param {boolean} veryLargeInterior
 */
export function setInsideVeryLargeInterior(veryLargeInterior: boolean): void {
	const setInsideVeryLargeInterior_result = Citizen.invokeNative<void>('0x060BB8BC8FFE8213', veryLargeInterior);
	return setInsideVeryLargeInterior_result;
}