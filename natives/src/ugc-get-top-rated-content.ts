import { IntRef } from '@ivanzaida/structures'

/**
 * NETWORK:UGC_GET_TOP_RATED_CONTENT
 *
 * 0xAD20B85AA9EC7F0B

 * 
 * ------------------------------------------------------------------
 * @param {number} offset
 * @param {number} maxCount
 * @param {string} szContentType
 * @param {IntRef} descriptionsId [Ref]
 * @returns {boolean}  
 */
export function ugcGetTopRatedContent(offset: number, maxCount: number, szContentType: string, descriptionsId: IntRef /* ptr */): boolean {
	const ugcGetTopRatedContent_result = Citizen.invokeNative<boolean>('0xAD20B85AA9EC7F0B', offset, maxCount, szContentType, descriptionsId.dataView);
	return ugcGetTopRatedContent_result;
}