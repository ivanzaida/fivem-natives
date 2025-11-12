/**
 * CFX:GET_FALL_DAMAGE_MULTIPLIER
 *
 * 0x7C46A6F0

 * A getter for [SET_FALL_DAMAGE_MULTIPLIER](#_0xF2E1A531).
 * 
 * ------------------------------------------------------------------
 * @returns {number}  Returns the fall damage multiplier applied to all peds when calculating fall damage from falls **below the kill fall height threshold** (i.e., when the fall does not cause instant death).
The default value is `7.0`.
 */
export function getFallDamageMultiplier(): number {
	const getFallDamageMultiplier_result = Citizen.invokeNative<number>('0x7C46A6F0', );
	return getFallDamageMultiplier_result;
}