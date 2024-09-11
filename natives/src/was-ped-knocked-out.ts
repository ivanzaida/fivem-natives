import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:WAS_PED_KNOCKED_OUT
 *
 * 0x969DAA52492D900B

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function wasPedKnockedOut(ped: PedIndex): boolean {
	const wasPedKnockedOut_result = Citizen.invokeNative<boolean>('0x969DAA52492D900B', ped);
	return wasPedKnockedOut_result;
}