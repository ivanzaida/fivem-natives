/**
 * NETWORK:UGC_GET_CONTENT_PATH
 *
 * 0xEA3E22389A733263

 * 
 * ------------------------------------------------------------------
 * @param {number} content
 * @param {number} fileID
 * @returns {string}  
 */
export function ugcGetContentPath(content: number, fileID: number = 0): string {
	const ugcGetContentPath_result = Citizen.invokeNative<string>('0xEA3E22389A733263', content, fileID);
	return ugcGetContentPath_result;
}