import { PedIndex } from '@ivanzaida/structures'

/**
 * WEAPON:SET_PED_STUN_GUN_FINITE_AMMO
 *
 * 0x9EFAE0A25C020F4B

 * 
 * Set the specified ped to have finite ammo for WEAPON_STUNGUN, overriding metadata InfiniteAmmo value
 * Natives that set ammo values on WEAPON_STUNGUN/AMMO_STUNGUN will be IGNORED if finite ammo is not set by this native
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} setFinite
 */
export function setPedStunGunFiniteAmmo(ped: PedIndex, setFinite: boolean): void {
	const setPedStunGunFiniteAmmo_result = Citizen.invokeNative<void>('0x9EFAE0A25C020F4B', ped, setFinite);
	return setPedStunGunFiniteAmmo_result;
}