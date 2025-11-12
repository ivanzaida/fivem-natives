/**
 * GRAPHICS:SET_FLASH
 *
 * 0x6CC07FAD61035099

 * 
 * Purpose of p0 and p1 unknown.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} minExposure
 * @param {number} maxExposure
 * @param {number} rampUpDuration
 * @param {number} rampDownDuration
 * @param {number} holdDuration
 */
export function setFlash(minExposure: number, maxExposure: number, rampUpDuration: number, rampDownDuration: number, holdDuration: number): void {
	const setFlash_result = Citizen.invokeNative<void>('0x6CC07FAD61035099', minExposure, maxExposure, rampUpDuration, rampDownDuration, holdDuration);
	return setFlash_result;
}