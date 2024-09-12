import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:GET_PED_ENVEFF_SCALE
 *
 * 0x5D023856BF4C9AB2

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {number}  
 */
export function getPedEnveffScale(ped: PedIndex): number {
	const getPedEnveffScale_result = Citizen.invokeNative<number>('0x5D023856BF4C9AB2', ped);
	return getPedEnveffScale_result;
}