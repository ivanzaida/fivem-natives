/**
 * CFX:GET_FALL_DAMAGE_LAND_ON_FOOT_MULTIPLIER
 *
 * 0x2C048945

 * A getter for [SET_FALL_DAMAGE_LAND_ON_FOOT_MULTIPLIER](#_0x164A08C9).
 * 
 * ------------------------------------------------------------------
 * @returns {number}  Returns the fall damage multiplier applied when a ped lands **on foot** from a fall below the kill fall height threshold (i.e., when the fall does not cause instant death).
The default value is `3.0`.
 */
export function getFallDamageLandOnFootMultiplier(): number {
	const getFallDamageLandOnFootMultiplier_result = Citizen.invokeNative<number>('0x2C048945', );
	return getFallDamageLandOnFootMultiplier_result;
}