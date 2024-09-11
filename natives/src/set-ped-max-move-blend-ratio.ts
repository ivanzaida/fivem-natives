import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_MAX_MOVE_BLEND_RATIO
 *
 * 0x4190C67D524CD0DC

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} moveBlendRatio
 */
export function setPedMaxMoveBlendRatio(ped: PedIndex, moveBlendRatio: number): void {
	const setPedMaxMoveBlendRatio_result = Citizen.invokeNative<void>('0x4190C67D524CD0DC', ped, moveBlendRatio);
	return setPedMaxMoveBlendRatio_result;
}