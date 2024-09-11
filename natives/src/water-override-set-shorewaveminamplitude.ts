/**
 * MISC:WATER_OVERRIDE_SET_SHOREWAVEMINAMPLITUDE
 *
 * 0xB39B9674B1E9D097

 * 
 * ------------------------------------------------------------------
 * @param {number} value
 */
export function waterOverrideSetShorewaveminamplitude(value: number): void {
	const waterOverrideSetShorewaveminamplitude_result = Citizen.invokeNative<void>('0xB39B9674B1E9D097', value);
	return waterOverrideSetShorewaveminamplitude_result;
}