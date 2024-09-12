import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:IS_PED_USING_ACTION_MODE
 *
 * 0X5AE7EDA2

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedUsingActionMode(ped: PedIndex): boolean {
	const isPedUsingActionMode_result = Citizen.invokeNative<boolean>('0X5AE7EDA2', ped);
	return isPedUsingActionMode_result;
}