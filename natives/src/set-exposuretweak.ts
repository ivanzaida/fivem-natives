/**
 * GRAPHICS:SET_EXPOSURETWEAK
 *
 * 0xBEE1FB2B37222CF5

 * 
 * ------------------------------------------------------------------
 * @param {boolean} onOff
 */
export function setExposuretweak(onOff: boolean): void {
	const setExposuretweak_result = Citizen.invokeNative<void>('0xBEE1FB2B37222CF5', onOff);
	return setExposuretweak_result;
}