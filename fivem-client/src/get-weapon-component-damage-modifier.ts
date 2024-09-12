/**
 * CFX:GET_WEAPON_COMPONENT_DAMAGE_MODIFIER
 *
 * 0X4A0E3855

 * A getter for `CWeaponDamageModifier` in a weapon component.
 * 
 * ------------------------------------------------------------------
 * @param {number} componentHash Weapon component name hash.
 * @returns {number}  A weapon component damage modifier.
 */
export function getWeaponComponentDamageModifier(componentHash: number): number {
	const getWeaponComponentDamageModifier_result = Citizen.invokeNative<number>('0X4A0E3855', componentHash);
	return getWeaponComponentDamageModifier_result;
}