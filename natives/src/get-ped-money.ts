import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:GET_PED_MONEY
 *
 * 0x6E01C40ECE96D208

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {number}  
 */
export function getPedMoney(ped: PedIndex): number {
	const getPedMoney_result = Citizen.invokeNative<number>('0x6E01C40ECE96D208', ped);
	return getPedMoney_result;
}