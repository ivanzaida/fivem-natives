import { PedIndex } from '@ivanzaida/structures'

/**
 * WEAPON:CLEAR_PED_LAST_WEAPON_DAMAGE
 *
 * 0xD8AE5A845CE0131A

 * 
 * Does NOT seem to work with HAS_PED_BEEN_DAMAGED_BY_WEAPON. Use CLEAR_ENTITY_LAST_WEAPON_DAMAGE and HAS_ENTITY_BEEN_DAMAGED_BY_WEAPON instead.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function clearPedLastWeaponDamage(ped: PedIndex): void {
	const clearPedLastWeaponDamage_result = Citizen.invokeNative<void>('0xD8AE5A845CE0131A', ped);
	return clearPedLastWeaponDamage_result;
}