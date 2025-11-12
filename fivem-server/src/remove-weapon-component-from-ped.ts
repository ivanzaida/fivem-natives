import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:REMOVE_WEAPON_COMPONENT_FROM_PED
 *
 * 0x412AA00D

 * 
 * Full list of weapons & components by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} weaponHash
 * @param {number} componentHash
 */
export function removeWeaponComponentFromPed(ped: PedIndex, weaponHash: number, componentHash: number): void {
	const removeWeaponComponentFromPed_result = Citizen.invokeNative<void>('0x412AA00D', ped, weaponHash, componentHash);
	return removeWeaponComponentFromPed_result;
}