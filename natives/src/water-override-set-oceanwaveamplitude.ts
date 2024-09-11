/**
 * MISC:WATER_OVERRIDE_SET_OCEANWAVEAMPLITUDE
 *
 * 0xE8B5A1B75D8BF700

 * 
 * ------------------------------------------------------------------
 * @param {number} value
 */
export function waterOverrideSetOceanwaveamplitude(value: number): void {
	const waterOverrideSetOceanwaveamplitude_result = Citizen.invokeNative<void>('0xE8B5A1B75D8BF700', value);
	return waterOverrideSetOceanwaveamplitude_result;
}