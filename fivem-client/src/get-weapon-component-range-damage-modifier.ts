/**
 * CFX:GET_WEAPON_COMPONENT_RANGE_DAMAGE_MODIFIER
 *
 * 0xE134FB8D

 * A getter for `CWeaponFallOffModifier` damage modifier value in a weapon component.
 * 
 * ------------------------------------------------------------------
 * @param {number} componentHash Weapon component name hash.
 * @returns {number}  A weapon component damage modifier.
 */
export function getWeaponComponentRangeDamageModifier(componentHash: number): number {
	const getWeaponComponentRangeDamageModifier_result = Citizen.invokeNative<number>('0xE134FB8D', componentHash);
	return getWeaponComponentRangeDamageModifier_result;
}