import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:GET_PED_DIES_IN_WATER
 *
 * 0x9EA69973FD5ABBBD

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function getPedDiesInWater(ped: PedIndex): boolean {
	const getPedDiesInWater_result = Citizen.invokeNative<boolean>('0x9EA69973FD5ABBBD', ped);
	return getPedDiesInWater_result;
}