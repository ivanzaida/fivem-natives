import { PedIndex } from '@ivanzaida/structures'

/**
 * WEAPON:SET_WEAPON_ANIMATION_OVERRIDE
 *
 * 0x06119A351A3080C2

 * 
 * Changes the selected ped aiming animation style.
 * Note : You must use GET_HASH_KEY!
 * 
 * Strings to use with GET_HASH_KEY :
 * 
 *     "Ballistic",
 *     "Default",
 *   "Fat",
 *   "Female",
 *    "FirstPerson",
 *   "FirstPersonAiming",
 *     "FirstPersonFranklin",
 *   "FirstPersonFranklinAiming",
 *     "FirstPersonFranklinRNG",
 *    "FirstPersonFranklinScope",
 *  "FirstPersonMPFemale",
 *   "FirstPersonMichael",
 *    "FirstPersonMichaelAiming",
 *  "FirstPersonMichaelRNG",
 *     "FirstPersonMichaelScope",
 *   "FirstPersonRNG",
 *    "FirstPersonScope",
 *  "FirstPersonTrevor",
 *     "FirstPersonTrevorAiming",
 *   "FirstPersonTrevorRNG",
 *  "FirstPersonTrevorScope",
 *    "Franklin",
 *  "Gang",
 *  "Gang1H",
 *    "GangFemale",
 *    "Hillbilly",
 *     "MP_F_Freemode",
 *     "Michael",
 *   "SuperFat",
 *  "Trevor"
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} weaponAnimationOverride
 */
export function setWeaponAnimationOverride(ped: PedIndex, weaponAnimationOverride: number): void {
	const setWeaponAnimationOverride_result = Citizen.invokeNative<void>('0x06119A351A3080C2', ped, weaponAnimationOverride);
	return setWeaponAnimationOverride_result;
}