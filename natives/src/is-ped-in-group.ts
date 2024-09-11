import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_IN_GROUP
 *
 * 0x133460AD0F183CC9

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedInGroup(ped: PedIndex): boolean {
	const isPedInGroup_result = Citizen.invokeNative<boolean>('0x133460AD0F183CC9', ped);
	return isPedInGroup_result;
}