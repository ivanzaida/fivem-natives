import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:GET_JACK_TARGET
 *
 * 0x3DEAB4931240C1E3

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {PedIndex}  
 */
export function getJackTarget(ped: PedIndex): PedIndex {
	const getJackTarget_result = Citizen.invokeNative<PedIndex>('0x3DEAB4931240C1E3', ped);
	return getJackTarget_result;
}