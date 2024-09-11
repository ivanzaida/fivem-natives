import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:GET_PED_DESIRED_MOVE_BLEND_RATIO
 *
 * 0x864E9BBAA7BFA064

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {number}  
 */
export function getPedDesiredMoveBlendRatio(ped: PedIndex): number {
	const getPedDesiredMoveBlendRatio_result = Citizen.invokeNative<number>('0x864E9BBAA7BFA064', ped);
	return getPedDesiredMoveBlendRatio_result;
}