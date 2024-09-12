/**
 * CFX:GET_WEAPON_COMPONENT_ACCURACY_MODIFIER
 *
 * 0xC693E278

 * A getter for `CWeaponAccuracyModifier` in a weapon component.
 * 
 * ------------------------------------------------------------------
 * @param {number} componentHash Weapon component name hash.
 * @returns {number}  A weapon component accuracy modifier.
 */
export function getWeaponComponentAccuracyModifier(componentHash: number): number {
	const getWeaponComponentAccuracyModifier_result = Citizen.invokeNative<number>('0xC693E278', componentHash);
	return getWeaponComponentAccuracyModifier_result;
}