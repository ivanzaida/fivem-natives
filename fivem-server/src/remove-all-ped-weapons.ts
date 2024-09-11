import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:REMOVE_ALL_PED_WEAPONS
 *
 * 0XA44CE817

 * setting the last params to false it does that same so I would suggest its not a toggle
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} deadCheck
 */
export function removeAllPedWeapons(ped: PedIndex, deadCheck: boolean = true): void {
	const removeAllPedWeapons_result = Citizen.invokeNative<void>('0XA44CE817', ped, deadCheck);
	return removeAllPedWeapons_result;
}