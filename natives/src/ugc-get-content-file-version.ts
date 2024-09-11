/**
 * NETWORK:UGC_GET_CONTENT_FILE_VERSION
 *
 * 0xB010444AA0CE4D66

 * 
 * ------------------------------------------------------------------
 * @param {number} content
 * @param {number} file
 * @returns {number}  
 */
export function ugcGetContentFileVersion(content: number, file: number): number {
	const ugcGetContentFileVersion_result = Citizen.invokeNative<number>('0xB010444AA0CE4D66', content, file);
	return ugcGetContentFileVersion_result;
}