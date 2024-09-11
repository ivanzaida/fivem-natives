/**
 * WEAPON:_SET_WEAPON_PED_DAMAGE_MODIFIER
 *
 * 0x1091922715B68DF0

 * 
 * ------------------------------------------------------------------
 */
export function setWeaponPedDamageModifier(): void {
	const setWeaponPedDamageModifier_result = Citizen.invokeNative<void>('0x1091922715B68DF0', );
	return setWeaponPedDamageModifier_result;
}