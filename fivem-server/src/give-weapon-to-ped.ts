import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GIVE_WEAPON_TO_PED
 *
 * 0xC4D88A85

 * 
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} weaponHash
 * @param {number} ammoCount
 * @param {boolean} isHidden
 * @param {boolean} bForceInHand
 */
export function giveWeaponToPed(ped: PedIndex, weaponHash: number, ammoCount: number, isHidden: boolean, bForceInHand: boolean): void {
	const giveWeaponToPed_result = Citizen.invokeNative<void>('0xC4D88A85', ped, weaponHash, ammoCount, isHidden, bForceInHand);
	return giveWeaponToPed_result;
}