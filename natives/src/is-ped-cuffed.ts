import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:IS_PED_CUFFED
 *
 * 0x736821465DA66F80

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedCuffed(ped: PedIndex): boolean {
	const isPedCuffed_result = Citizen.invokeNative<boolean>('0x736821465DA66F80', ped);
	return isPedCuffed_result;
}