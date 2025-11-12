/**
 * PED:SET_AI_WEAPON_DAMAGE_MODIFIER
 *
 * 0x36978A351E9CB5D8

 * 
 * This function will change the ai weapon damage multiplier
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} modifier
 */
export function setAiWeaponDamageModifier(modifier: number): void {
	const setAiWeaponDamageModifier_result = Citizen.invokeNative<void>('0x36978A351E9CB5D8', modifier);
	return setAiWeaponDamageModifier_result;
}