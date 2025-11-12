/**
 * CFX:SET_WEAPON_ACCURACY_SPREAD
 *
 * 0x598DD6AE

 * A setter for the accuracy spread of a weapon.
 * 
 * ------------------------------------------------------------------
 * @param {number} weaponHash Weapon name hash.
 * @param {number} spread Accuracy spread
 */
export function setWeaponAccuracySpread(weaponHash: number, spread: number): void {
	const setWeaponAccuracySpread_result = Citizen.invokeNative<void>('0x598DD6AE', weaponHash, spread);
	return setWeaponAccuracySpread_result;
}