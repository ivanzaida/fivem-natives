/**
 * PED:SET_AI_MELEE_WEAPON_DAMAGE_MODIFIER
 *
 * 0x767EC66D239AED1D

 * 
 * This function will change the ai melee weapon damage multiplier
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} modifier
 */
export function setAiMeleeWeaponDamageModifier(modifier: number): void {
	const setAiMeleeWeaponDamageModifier_result = Citizen.invokeNative<void>('0x767EC66D239AED1D', modifier);
	return setAiMeleeWeaponDamageModifier_result;
}