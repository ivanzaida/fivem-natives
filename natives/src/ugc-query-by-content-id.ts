/**
 * NETWORK:UGC_QUERY_BY_CONTENT_ID
 *
 * 0xA5D1672BB8378B6A

 * 
 * ------------------------------------------------------------------
 * @param {string} szContentID
 * @param {boolean} latest
 * @param {string} szContentType
 * @returns {boolean}  
 */
export function ugcQueryByContentId(szContentID: string, latest: boolean, szContentType: string): boolean {
	const ugcQueryByContentId_result = Citizen.invokeNative<boolean>('0xA5D1672BB8378B6A', szContentID, latest, szContentType);
	return ugcQueryByContentId_result;
}