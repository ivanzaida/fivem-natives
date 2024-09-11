import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_GESTURING
 *
 * 0xB3BE3390D375B97E

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedGesturing(ped: PedIndex): boolean {
	const isPedGesturing_result = Citizen.invokeNative<boolean>('0xB3BE3390D375B97E', ped);
	return isPedGesturing_result;
}