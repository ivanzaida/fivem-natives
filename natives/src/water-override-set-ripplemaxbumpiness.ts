/**
 * MISC:WATER_OVERRIDE_SET_RIPPLEMAXBUMPINESS
 *
 * 0x18DEB87CBCBB1C35

 * 
 * ------------------------------------------------------------------
 * @param {number} value
 */
export function waterOverrideSetRipplemaxbumpiness(value: number): void {
	const waterOverrideSetRipplemaxbumpiness_result = Citizen.invokeNative<void>('0x18DEB87CBCBB1C35', value);
	return waterOverrideSetRipplemaxbumpiness_result;
}