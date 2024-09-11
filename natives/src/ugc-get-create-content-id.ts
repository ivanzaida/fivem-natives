/**
 * NETWORK:UGC_GET_CREATE_CONTENT_ID
 *
 * 0x7C1C1B7F72ACD298

 * 
 * ------------------------------------------------------------------
 * @returns {string}  
 */
export function ugcGetCreateContentId(): string {
	const ugcGetCreateContentId_result = Citizen.invokeNative<string>('0x7C1C1B7F72ACD298', );
	return ugcGetCreateContentId_result;
}