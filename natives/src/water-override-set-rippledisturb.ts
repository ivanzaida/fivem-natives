/**
 * MISC:WATER_OVERRIDE_SET_RIPPLEDISTURB
 *
 * 0xAC4F34F6299E2289

 * 
 * ------------------------------------------------------------------
 * @param {number} value
 */
export function waterOverrideSetRippledisturb(value: number): void {
	const waterOverrideSetRippledisturb_result = Citizen.invokeNative<void>('0xAC4F34F6299E2289', value);
	return waterOverrideSetRippledisturb_result;
}