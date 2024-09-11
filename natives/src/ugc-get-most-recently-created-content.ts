import { IntRef } from '@ivanzaida/structures'

/**
 * NETWORK:UGC_GET_MOST_RECENTLY_CREATED_CONTENT
 *
 * 0x3A9A4663D37D7390

 * 
 * ------------------------------------------------------------------
 * @param {number} offset
 * @param {number} maxCount
 * @param {string} szContentType
 * @param {IntRef} descriptionsId [Ref]
 * @returns {boolean}  
 */
export function ugcGetMostRecentlyCreatedContent(offset: number, maxCount: number, szContentType: string, descriptionsId: IntRef /* ptr */): boolean {
	const ugcGetMostRecentlyCreatedContent_result = Citizen.invokeNative<boolean>('0x3A9A4663D37D7390', offset, maxCount, szContentType, descriptionsId.dataView);
	return ugcGetMostRecentlyCreatedContent_result;
}