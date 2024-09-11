import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:GET_PEDS_JACKER
 *
 * 0xC1089D3918F03D33

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {PedIndex}  
 */
export function getPedsJacker(ped: PedIndex): PedIndex {
	const getPedsJacker_result = Citizen.invokeNative<PedIndex>('0xC1089D3918F03D33', ped);
	return getPedsJacker_result;
}