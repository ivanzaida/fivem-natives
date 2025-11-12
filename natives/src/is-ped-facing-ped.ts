import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_FACING_PED
 *
 * 0x3644984C9D7B57EF

 * 
 * angle is ped's view cone
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} pedIndex1
 * @param {PedIndex} pedIndex2
 * @param {number} degrees
 * @returns {boolean}  
 */
export function isPedFacingPed(pedIndex1: PedIndex, pedIndex2: PedIndex, degrees: number): boolean {
	const isPedFacingPed_result = Citizen.invokeNative<boolean>('0x3644984C9D7B57EF', pedIndex1, pedIndex2, degrees);
	return isPedFacingPed_result;
}