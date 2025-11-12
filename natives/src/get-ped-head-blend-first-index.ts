import { EHeadBlendHeadType } from '@ivanzaida/structures'

/**
 * PED:GET_PED_HEAD_BLEND_FIRST_INDEX
 *
 * 0x6C88944114345A04

 * 
 * Type equals 0 for male non-dlc, 1 for female non-dlc, 2 for male dlc, and 3 for female dlc.
 * 
 * Used when calling SET_PED_HEAD_BLEND_DATA.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EHeadBlendHeadType} type
 * @returns {number}  
 */
export function getPedHeadBlendFirstIndex(type: EHeadBlendHeadType | number): number {
	const getPedHeadBlendFirstIndex_result = Citizen.invokeNative<number>('0x6C88944114345A04', type);
	return getPedHeadBlendFirstIndex_result;
}