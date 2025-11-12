import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:GET_HEAD_BLEND_EYE_COLOR
 *
 * 0x795C9AE513FFEF5F

 * 
 * A getter for _SET_PED_EYE_COLOR. Returns -1 if fails to get.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {number}  
 */
export function getHeadBlendEyeColor(ped: PedIndex): number {
	const getHeadBlendEyeColor_result = Citizen.invokeNative<number>('0x795C9AE513FFEF5F', ped);
	return getHeadBlendEyeColor_result;
}