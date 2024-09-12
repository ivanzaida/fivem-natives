import { IntRef } from '@ivanzaida/structures'

/**
 * NETWORK:UGC_GET_FRIEND_CONTENT
 *
 * 0xAE7CAF61C281EAB2

 * 
 * ------------------------------------------------------------------
 * @param {number} offset
 * @param {number} maxCount
 * @param {string} szContentType
 * @param {IntRef} descriptionsId [Ref]
 * @returns {boolean}  
 */
export function ugcGetFriendContent(offset: number, maxCount: number, szContentType: string, descriptionsId: IntRef /* ptr */): boolean {
	const ugcGetFriendContent_result = Citizen.invokeNative<boolean>('0xAE7CAF61C281EAB2', offset, maxCount, szContentType, descriptionsId.dataView);
	return ugcGetFriendContent_result;
}