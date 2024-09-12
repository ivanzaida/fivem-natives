import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_MIN_MOVE_BLEND_RATIO
 *
 * 0x7992D566A90CD49C

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} moveBlendRatio
 */
export function setPedMinMoveBlendRatio(ped: PedIndex, moveBlendRatio: number): void {
	const setPedMinMoveBlendRatio_result = Citizen.invokeNative<void>('0x7992D566A90CD49C', ped, moveBlendRatio);
	return setPedMinMoveBlendRatio_result;
}