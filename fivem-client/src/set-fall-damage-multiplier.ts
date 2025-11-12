/**
 * CFX:SET_FALL_DAMAGE_MULTIPLIER
 *
 * 0xB43B621B

 * A setter for [GET_FALL_DAMAGE_MULTIPLIER](#_0x2D6A0A83).
 * 
 * ------------------------------------------------------------------
 * @param {number} multiplier fall damage multiplier applied to all peds when calculating fall damage from falls below the kill fall height threshold (i.e., when the fall does not cause instant death). Default value is 7.0.
 */
export function setFallDamageMultiplier(multiplier: number): void {
	const setFallDamageMultiplier_result = Citizen.invokeNative<void>('0xB43B621B', multiplier);
	return setFallDamageMultiplier_result;
}