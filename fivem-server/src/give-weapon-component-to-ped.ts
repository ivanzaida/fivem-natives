import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GIVE_WEAPON_COMPONENT_TO_PED
 *
 * 0x3E1E286D

 * 
 * Full list of weapons & components by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} weaponHash
 * @param {number} componentHash
 */
export function giveWeaponComponentToPed(ped: PedIndex, weaponHash: number, componentHash: number): void {
	const giveWeaponComponentToPed_result = Citizen.invokeNative<void>('0x3E1E286D', ped, weaponHash, componentHash);
	return giveWeaponComponentToPed_result;
}