/**
 * MISC:WATER_OVERRIDE_SET_SHOREWAVEAMPLITUDE
 *
 * 0x2D6868095BD2DF64

 * 
 * ------------------------------------------------------------------
 * @param {number} value
 */
export function waterOverrideSetShorewaveamplitude(value: number): void {
	const waterOverrideSetShorewaveamplitude_result = Citizen.invokeNative<void>('0x2D6868095BD2DF64', value);
	return waterOverrideSetShorewaveamplitude_result;
}