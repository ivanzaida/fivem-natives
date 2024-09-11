/**
 * MISC:WATER_OVERRIDE_SET_RIPPLEBUMPINESS
 *
 * 0x716752DE8ABA2F76

 * 
 * ------------------------------------------------------------------
 * @param {number} value
 */
export function waterOverrideSetRipplebumpiness(value: number): void {
	const waterOverrideSetRipplebumpiness_result = Citizen.invokeNative<void>('0x716752DE8ABA2F76', value);
	return waterOverrideSetRipplebumpiness_result;
}