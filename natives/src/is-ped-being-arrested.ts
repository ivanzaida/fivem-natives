import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:IS_PED_BEING_ARRESTED
 *
 * 0x7FB6C108C1694163

 * 
 * This function is hard-coded to always return 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedBeingArrested(ped: PedIndex): boolean {
	const isPedBeingArrested_result = Citizen.invokeNative<boolean>('0x7FB6C108C1694163', ped);
	return isPedBeingArrested_result;
}