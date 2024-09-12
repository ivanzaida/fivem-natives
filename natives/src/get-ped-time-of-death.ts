import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:GET_PED_TIME_OF_DEATH
 *
 * 0x1F4CEA172C882694

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {number}  
 */
export function getPedTimeOfDeath(ped: PedIndex): number {
	const getPedTimeOfDeath_result = Citizen.invokeNative<number>('0x1F4CEA172C882694', ped);
	return getPedTimeOfDeath_result;
}