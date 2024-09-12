/**
 * CFX:GET_WEAPON_COMPONENT_RANGE_MODIFIER
 *
 * 0x2FD0BC1B

 * A getter for `CWeaponFallOffModifier` range modifier value in a weapon component.
 * 
 * ------------------------------------------------------------------
 * @param {number} componentHash Weapon component name hash.
 * @returns {number}  A weapon component range modifier.
 */
export function getWeaponComponentRangeModifier(componentHash: number): number {
	const getWeaponComponentRangeModifier_result = Citizen.invokeNative<number>('0x2FD0BC1B', componentHash);
	return getWeaponComponentRangeModifier_result;
}