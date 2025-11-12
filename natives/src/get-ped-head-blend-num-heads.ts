import { EHeadBlendHeadType } from '@ivanzaida/structures'

/**
 * PED:GET_PED_HEAD_BLEND_NUM_HEADS
 *
 * 0x69618F2236615539

 * 
 * Type equals 0 for male non-dlc, 1 for female non-dlc, 2 for male dlc, and 3 for female dlc.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EHeadBlendHeadType} type
 * @returns {number}  
 */
export function getPedHeadBlendNumHeads(type: EHeadBlendHeadType | number): number {
	const getPedHeadBlendNumHeads_result = Citizen.invokeNative<number>('0x69618F2236615539', type);
	return getPedHeadBlendNumHeads_result;
}