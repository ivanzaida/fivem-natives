import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:GET_PED_MAX_HEALTH
 *
 * 0x3C8EDE4003ABACA0

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {number}  
 */
export function getPedMaxHealth(ped: PedIndex): number {
	const getPedMaxHealth_result = Citizen.invokeNative<number>('0x3C8EDE4003ABACA0', ped);
	return getPedMaxHealth_result;
}