/**
 * CFX:GET_WEAPON_RECOIL_SHAKE_AMPLITUDE
 *
 * 0x5E1AF5F

 * A getter for the recoil shake amplitude of a weapon.
 * 
 * ------------------------------------------------------------------
 * @param {number} weaponHash Weapon name hash.
 * @returns {number}  The recoil shake amplitude of a weapon.
 */
export function getWeaponRecoilShakeAmplitude(weaponHash: number): number {
	const getWeaponRecoilShakeAmplitude_result = Citizen.invokeNative<number>('0x5E1AF5F', weaponHash);
	return getWeaponRecoilShakeAmplitude_result;
}