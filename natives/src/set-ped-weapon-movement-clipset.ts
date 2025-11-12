import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_WEAPON_MOVEMENT_CLIPSET
 *
 * 0xC806A20F4C5AC6AF

 * 
 * Make the ped use different weapon clipset when walking around.
 * e.g. calling this with the rifle movement clipset would cause the ped to always walk around as
 * if it were carrying a rifle, regardless of the weapon equipped. Note, this only affects the peds
 * animation when walking around normally, not when strafing or aiming with the weapon.
 * Weapon movement clipset are defined in weapons.meta
 * DON'T FORGET to stream in the new clipset before calling this
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} clipSet
 */
export function setPedWeaponMovementClipset(ped: PedIndex, clipSet: string): void {
	const setPedWeaponMovementClipset_result = Citizen.invokeNative<void>('0xC806A20F4C5AC6AF', ped, clipSet);
	return setPedWeaponMovementClipset_result;
}