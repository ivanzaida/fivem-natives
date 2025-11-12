import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:REMOVE_ALL_PED_WEAPONS
 *
 * 0xA44CE817

 * 
 * setting the last params to false it does that same so I would suggest its not a toggle
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The ped entity
 * @param {boolean} p1
 */
export function removeAllPedWeapons(ped: PedIndex, p1: boolean): void {
	const removeAllPedWeapons_result = Citizen.invokeNative<void>('0xA44CE817', ped, p1);
	return removeAllPedWeapons_result;
}