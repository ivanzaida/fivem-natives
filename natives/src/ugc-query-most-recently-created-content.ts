import { EUgcBoolOption } from '@ivanzaida/structures'

/**
 * NETWORK:UGC_QUERY_MOST_RECENTLY_CREATED_CONTENT
 *
 * 0xA598E27B609E1B5E

 * 
 * ------------------------------------------------------------------
 * @param {number} offset
 * @param {number} maxCount
 * @param {string} szContentType
 * @param {EUgcBoolOption} openOption
 * @returns {boolean}  
 */
export function ugcQueryMostRecentlyCreatedContent(offset: number, maxCount: number, szContentType: string, openOption: EUgcBoolOption | number): boolean {
	const ugcQueryMostRecentlyCreatedContent_result = Citizen.invokeNative<boolean>('0xA598E27B609E1B5E', offset, maxCount, szContentType, openOption);
	return ugcQueryMostRecentlyCreatedContent_result;
}