import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_CURRENT_PED_WEAPON
 *
 * 0xB8278882

 * 
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} weaponHash
 * @param {boolean} bForceInHand
 */
export function setCurrentPedWeapon(ped: PedIndex, weaponHash: number, bForceInHand: boolean): void {
	const setCurrentPedWeapon_result = Citizen.invokeNative<void>('0xB8278882', ped, weaponHash, bForceInHand);
	return setCurrentPedWeapon_result;
}