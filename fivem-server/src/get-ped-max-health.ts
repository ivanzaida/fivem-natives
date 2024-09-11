import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PED_MAX_HEALTH
 *
 * 0XA45B6C8D

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {number}  
 */
export function getPedMaxHealth(ped: PedIndex): number {
	const getPedMaxHealth_result = Citizen.invokeNative<number>('0XA45B6C8D', ped);
	return getPedMaxHealth_result;
}