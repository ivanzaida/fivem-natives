/**
 * PLAYER:SET_SPECIAL_ABILITY_MULTIPLIER
 *
 * 0xF65CE7345EAFDBE2

 * 
 * ------------------------------------------------------------------
 * @param {number} multiplier
 */
export function setSpecialAbilityMultiplier(multiplier: number): void {
	const setSpecialAbilityMultiplier_result = Citizen.invokeNative<void>('0xF65CE7345EAFDBE2', multiplier);
	return setSpecialAbilityMultiplier_result;
}