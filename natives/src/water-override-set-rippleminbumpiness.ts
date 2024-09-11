/**
 * MISC:WATER_OVERRIDE_SET_RIPPLEMINBUMPINESS
 *
 * 0x3C7E67D89C37CDBA

 * 
 * ------------------------------------------------------------------
 * @param {number} value
 */
export function waterOverrideSetRippleminbumpiness(value: number): void {
	const waterOverrideSetRippleminbumpiness_result = Citizen.invokeNative<void>('0x3C7E67D89C37CDBA', value);
	return waterOverrideSetRippleminbumpiness_result;
}