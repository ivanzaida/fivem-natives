/**
 * NETWORK:UGC_GET_GET_BY_CONTENT_ID
 *
 * 0xA46905C7B738C729

 * 
 * ------------------------------------------------------------------
 * @param {string} szContentID
 * @param {string} szContentType
 * @returns {boolean}  
 */
export function ugcGetGetByContentId(szContentID: string, szContentType: string): boolean {
	const ugcGetGetByContentId_result = Citizen.invokeNative<boolean>('0xA46905C7B738C729', szContentID, szContentType);
	return ugcGetGetByContentId_result;
}