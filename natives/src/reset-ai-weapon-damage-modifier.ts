/**
 * PED:RESET_AI_WEAPON_DAMAGE_MODIFIER
 *
 * 0xDD84F9C956E69AC8

 * 
 * This function will reset the ai weapon damage multiplier
 * 
 * 
 * ------------------------------------------------------------------
 */
export function resetAiWeaponDamageModifier(): void {
	const resetAiWeaponDamageModifier_result = Citizen.invokeNative<void>('0xDD84F9C956E69AC8', );
	return resetAiWeaponDamageModifier_result;
}