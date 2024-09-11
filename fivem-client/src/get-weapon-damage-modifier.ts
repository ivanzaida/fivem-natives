/**
 * CFX:GET_WEAPON_DAMAGE_MODIFIER
 *
 * 0XD979143

 * A getter for [_SET_WEAPON_DAMAGE_MODIFIER](#_0x4757F00BC6323CFE).
 * 
 * ------------------------------------------------------------------
 * @param {number} weaponHash Weapon name hash.
 * @returns {number}  A weapon damage modifier.
 */
export function getWeaponDamageModifier(weaponHash: number): number {
	const getWeaponDamageModifier_result = Citizen.invokeNative<number>('0XD979143', weaponHash);
	return getWeaponDamageModifier_result;
}