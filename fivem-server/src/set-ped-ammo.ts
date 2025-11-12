import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_PED_AMMO
 *
 * 0xBF90DF1A

 * 
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} weaponHash
 * @param {number} ammo
 */
export function setPedAmmo(ped: PedIndex, weaponHash: number, ammo: number): void {
	const setPedAmmo_result = Citizen.invokeNative<void>('0xBF90DF1A', ped, weaponHash, ammo);
	return setPedAmmo_result;
}