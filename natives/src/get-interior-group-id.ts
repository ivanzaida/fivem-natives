import { InteriorInstanceIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:GET_INTERIOR_GROUP_ID
 *
 * 0x1F6CFCD52206CDB0

 * 
 * Returns the group ID of the specified interior. For example, regular interiors have group 0, subway interiors have group 1. There are a few other groups too.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {InteriorInstanceIndex} interiorInstance
 * @returns {number}  
 */
export function getInteriorGroupId(interiorInstance: InteriorInstanceIndex): number {
	const getInteriorGroupId_result = Citizen.invokeNative<number>('0x1F6CFCD52206CDB0', interiorInstance);
	return getInteriorGroupId_result;
}