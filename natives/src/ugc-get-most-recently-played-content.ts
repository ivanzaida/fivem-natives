import { IntRef } from '@ivanzaida/structures'

/**
 * NETWORK:UGC_GET_MOST_RECENTLY_PLAYED_CONTENT
 *
 * 0x0E3101BD119D7E62

 * 
 * ------------------------------------------------------------------
 * @param {number} offset
 * @param {number} maxCount
 * @param {string} szContentType
 * @param {IntRef} descriptionsId [Ref]
 * @returns {boolean}  
 */
export function ugcGetMostRecentlyPlayedContent(offset: number, maxCount: number, szContentType: string, descriptionsId: IntRef /* ptr */): boolean {
	const ugcGetMostRecentlyPlayedContent_result = Citizen.invokeNative<boolean>('0x0E3101BD119D7E62', offset, maxCount, szContentType, descriptionsId.dataView);
	return ugcGetMostRecentlyPlayedContent_result;
}