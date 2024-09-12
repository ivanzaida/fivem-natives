import { EUgcCategory, EUgcSortType } from '@ivanzaida/structures'

/**
 * NETWORK:UGC_QUERY_BY_CATEGORY
 *
 * 0x6D52735FB5FD59E8

 * 
 * ------------------------------------------------------------------
 * @param {EUgcCategory} category
 * @param {number} offset
 * @param {number} maxCount
 * @param {string} szContentType
 * @param {EUgcSortType} sortType
 * @param {boolean} descending
 * @returns {boolean}  
 */
export function ugcQueryByCategory(category: EUgcCategory | number, offset: number, maxCount: number, szContentType: string, sortType: EUgcSortType | number = 1, descending: boolean = false): boolean {
	const ugcQueryByCategory_result = Citizen.invokeNative<boolean>('0x6D52735FB5FD59E8', category, offset, maxCount, szContentType, sortType, descending);
	return ugcQueryByCategory_result;
}