/**
 * PED:RESET_AI_MELEE_WEAPON_DAMAGE_MODIFIER
 *
 * 0x01B722A2B2026558

 * 
 * This function will reset the ai melee weapon damage multiplier
 * 
 * 
 * ------------------------------------------------------------------
 */
export function resetAiMeleeWeaponDamageModifier(): void {
	const resetAiMeleeWeaponDamageModifier_result = Citizen.invokeNative<void>('0x01B722A2B2026558', );
	return resetAiMeleeWeaponDamageModifier_result;
}