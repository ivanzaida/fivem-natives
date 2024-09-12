import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PED_ARMOUR
 *
 * 0X2CE311A7

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {number}  
 */
export function getPedArmour(ped: PedIndex): number {
	const getPedArmour_result = Citizen.invokeNative<number>('0X2CE311A7', ped);
	return getPedArmour_result;
}