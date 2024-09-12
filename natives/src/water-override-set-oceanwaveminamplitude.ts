/**
 * MISC:WATER_OVERRIDE_SET_OCEANWAVEMINAMPLITUDE
 *
 * 0x2CA1243CF0209F78

 * 
 * ------------------------------------------------------------------
 * @param {number} value
 */
export function waterOverrideSetOceanwaveminamplitude(value: number): void {
	const waterOverrideSetOceanwaveminamplitude_result = Citizen.invokeNative<void>('0x2CA1243CF0209F78', value);
	return waterOverrideSetOceanwaveminamplitude_result;
}