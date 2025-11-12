/**
 * CFX:GET_WEAPON_ACCURACY_SPREAD
 *
 * 0x5343721

 * A getter for the accuracy spread of a weapon.
 * 
 * ------------------------------------------------------------------
 * @param {number} weaponHash Weapon name hash.
 * @returns {number}  The accuracy spread of a weapon.
 */
export function getWeaponAccuracySpread(weaponHash: number): number {
	const getWeaponAccuracySpread_result = Citizen.invokeNative<number>('0x5343721', weaponHash);
	return getWeaponAccuracySpread_result;
}