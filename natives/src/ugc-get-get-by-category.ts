import { EUgcCategory, IntRef } from '@ivanzaida/structures'

/**
 * NETWORK:UGC_GET_GET_BY_CATEGORY
 *
 * 0xF9618670CE65580B

 * 
 * ------------------------------------------------------------------
 * @param {EUgcCategory} category
 * @param {number} offset
 * @param {number} maxCount
 * @param {string} szContentType
 * @param {IntRef} descriptionsId [Ref]
 * @returns {boolean}  
 */
export function ugcGetGetByCategory(category: EUgcCategory | number, offset: number, maxCount: number, szContentType: string, descriptionsId: IntRef /* ptr */): boolean {
	const ugcGetGetByCategory_result = Citizen.invokeNative<boolean>('0xF9618670CE65580B', category, offset, maxCount, szContentType, descriptionsId.dataView);
	return ugcGetGetByCategory_result;
}