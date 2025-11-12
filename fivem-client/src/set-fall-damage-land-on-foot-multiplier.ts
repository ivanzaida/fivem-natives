/**
 * CFX:SET_FALL_DAMAGE_LAND_ON_FOOT_MULTIPLIER
 *
 * 0xA9EC9A79

 * A setter for [GET_FALL_DAMAGE_LAND_ON_FOOT_MULTIPLIER](#_0x3C8A1C92).
 * 
 * ------------------------------------------------------------------
 * @param {number} multiplier fall damage multiplier to apply when a ped lands on foot from a fall below the kill fall height threshold (i.e., when the fall does not cause instant death). Default value is 3.0.
 */
export function setFallDamageLandOnFootMultiplier(multiplier: number): void {
	const setFallDamageLandOnFootMultiplier_result = Citizen.invokeNative<void>('0xA9EC9A79', multiplier);
	return setFallDamageLandOnFootMultiplier_result;
}