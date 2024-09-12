import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_GOING_INTO_COVER
 *
 * 0x3F055D2CBA242A5D

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedGoingIntoCover(ped: PedIndex): boolean {
	const isPedGoingIntoCover_result = Citizen.invokeNative<boolean>('0x3F055D2CBA242A5D', ped);
	return isPedGoingIntoCover_result;
}