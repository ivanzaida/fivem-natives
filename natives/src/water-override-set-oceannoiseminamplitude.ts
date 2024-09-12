/**
 * MISC:WATER_OVERRIDE_SET_OCEANNOISEMINAMPLITUDE
 *
 * 0xA3F61E8395582E30

 * 
 * ------------------------------------------------------------------
 * @param {number} value
 */
export function waterOverrideSetOceannoiseminamplitude(value: number): void {
	const waterOverrideSetOceannoiseminamplitude_result = Citizen.invokeNative<void>('0xA3F61E8395582E30', value);
	return waterOverrideSetOceannoiseminamplitude_result;
}