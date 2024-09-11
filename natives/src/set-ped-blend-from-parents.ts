import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_BLEND_FROM_PARENTS
 *
 * 0x335B397DCC88FD74

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} targetPed
 * @param {PedIndex} parentPed1
 * @param {PedIndex} parentPed2
 * @param {number} parentBlend
 * @param {number} texBlend
 */
export function setPedBlendFromParents(targetPed: PedIndex, parentPed1: PedIndex, parentPed2: PedIndex, parentBlend: number, texBlend: number = 1): void {
	const setPedBlendFromParents_result = Citizen.invokeNative<void>('0x335B397DCC88FD74', targetPed, parentPed1, parentPed2, parentBlend, texBlend);
	return setPedBlendFromParents_result;
}