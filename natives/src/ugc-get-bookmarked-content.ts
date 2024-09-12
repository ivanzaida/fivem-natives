import { IntRef } from '@ivanzaida/structures'

/**
 * NETWORK:UGC_GET_BOOKMARKED_CONTENT
 *
 * 0x30385B4D972827A5

 * 
 * ------------------------------------------------------------------
 * @param {number} offset
 * @param {number} maxCount
 * @param {string} szContentType
 * @param {IntRef} descriptionsId [Ref]
 * @returns {boolean}  
 */
export function ugcGetBookmarkedContent(offset: number, maxCount: number, szContentType: string, descriptionsId: IntRef /* ptr */): boolean {
	const ugcGetBookmarkedContent_result = Citizen.invokeNative<boolean>('0x30385B4D972827A5', offset, maxCount, szContentType, descriptionsId.dataView);
	return ugcGetBookmarkedContent_result;
}