/**
 * NETWORK:UGC_COPY_CONTENT
 *
 * 0x150E13CB4B04648D

 * 
 * ------------------------------------------------------------------
 * @param {string} szContentID
 * @param {string} szContentType
 * @returns {boolean}  
 */
export function ugcCopyContent(szContentID: string, szContentType: string): boolean {
	const ugcCopyContent_result = Citizen.invokeNative<boolean>('0x150E13CB4B04648D', szContentID, szContentType);
	return ugcCopyContent_result;
}