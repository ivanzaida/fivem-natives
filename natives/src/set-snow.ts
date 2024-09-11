/**
 * MISC:SET_SNOW
 *
 * 0x312CA455A59783FA

 * 
 * ------------------------------------------------------------------
 * @param {number} snowVal
 */
export function setSnow(snowVal: number): void {
	const setSnow_result = Citizen.invokeNative<void>('0x312CA455A59783FA', snowVal);
	return setSnow_result;
}