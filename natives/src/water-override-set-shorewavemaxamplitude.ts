/**
 * MISC:WATER_OVERRIDE_SET_SHOREWAVEMAXAMPLITUDE
 *
 * 0x5D2587098D2C9CEF

 * 
 * ------------------------------------------------------------------
 * @param {number} value
 */
export function waterOverrideSetShorewavemaxamplitude(value: number): void {
	const waterOverrideSetShorewavemaxamplitude_result = Citizen.invokeNative<void>('0x5D2587098D2C9CEF', value);
	return waterOverrideSetShorewavemaxamplitude_result;
}