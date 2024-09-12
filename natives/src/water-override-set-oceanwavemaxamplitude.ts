/**
 * MISC:WATER_OVERRIDE_SET_OCEANWAVEMAXAMPLITUDE
 *
 * 0x1FAABAECFD9A7C83

 * 
 * ------------------------------------------------------------------
 * @param {number} value
 */
export function waterOverrideSetOceanwavemaxamplitude(value: number): void {
	const waterOverrideSetOceanwavemaxamplitude_result = Citizen.invokeNative<void>('0x1FAABAECFD9A7C83', value);
	return waterOverrideSetOceanwavemaxamplitude_result;
}