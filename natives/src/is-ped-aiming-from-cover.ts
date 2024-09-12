import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_AIMING_FROM_COVER
 *
 * 0xF5327658CA9AF463

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedAimingFromCover(ped: PedIndex): boolean {
	const isPedAimingFromCover_result = Citizen.invokeNative<boolean>('0xF5327658CA9AF463', ped);
	return isPedAimingFromCover_result;
}