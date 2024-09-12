import { IntRef } from '@ivanzaida/structures'

/**
 * NETWORK:UGC_GET_MY_CONTENT
 *
 * 0x4103A58ABA168EFB

 * 
 * ------------------------------------------------------------------
 * @param {number} offset
 * @param {number} maxCount
 * @param {string} szContentType
 * @param {IntRef} descriptionsId [Ref]
 * @returns {boolean}  
 */
export function ugcGetMyContent(offset: number, maxCount: number, szContentType: string, descriptionsId: IntRef /* ptr */): boolean {
	const ugcGetMyContent_result = Citizen.invokeNative<boolean>('0x4103A58ABA168EFB', offset, maxCount, szContentType, descriptionsId.dataView);
	return ugcGetMyContent_result;
}