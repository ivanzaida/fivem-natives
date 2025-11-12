import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:RESET_PED_WEAPON_MOVEMENT_CLIPSET
 *
 * 0xC935F6A2D1890729

 * 
 * Resets the weapon movement clipset based on the currently equipped weapon.
 * Weapon movement clipset are defined in weapons.meta
 * DON'T FORGET to unstream the clipset if no longer needed
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function resetPedWeaponMovementClipset(ped: PedIndex): void {
	const resetPedWeaponMovementClipset_result = Citizen.invokeNative<void>('0xC935F6A2D1890729', ped);
	return resetPedWeaponMovementClipset_result;
}