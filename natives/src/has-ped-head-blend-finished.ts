import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:HAS_PED_HEAD_BLEND_FINISHED
 *
 * 0x4CEC77F224BCD884

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function hasPedHeadBlendFinished(ped: PedIndex): boolean {
	const hasPedHeadBlendFinished_result = Citizen.invokeNative<boolean>('0x4CEC77F224BCD884', ped);
	return hasPedHeadBlendFinished_result;
}