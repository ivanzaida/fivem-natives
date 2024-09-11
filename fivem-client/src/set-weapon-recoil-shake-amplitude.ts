/**
 * CFX:SET_WEAPON_RECOIL_SHAKE_AMPLITUDE
 *
 * 0X9864312F

 * A setter for the recoil shake amplitude of a weapon.
 * 
 * ------------------------------------------------------------------
 * @param {number} weaponHash Weapon name hash.
 * @param {number} amplitude Recoil shake amplitude
 */
export function setWeaponRecoilShakeAmplitude(weaponHash: number, amplitude: number): void {
	const setWeaponRecoilShakeAmplitude_result = Citizen.invokeNative<void>('0X9864312F', weaponHash, amplitude);
	return setWeaponRecoilShakeAmplitude_result;
}