import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:SET_PED_DESIRED_MOVE_BLEND_RATIO
 *
 * 0xA6897CC743103C98

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} moveBlendRatio
 */
export function setPedDesiredMoveBlendRatio(ped: PedIndex, moveBlendRatio: number): void {
	const setPedDesiredMoveBlendRatio_result = Citizen.invokeNative<void>('0xA6897CC743103C98', ped, moveBlendRatio);
	return setPedDesiredMoveBlendRatio_result;
}