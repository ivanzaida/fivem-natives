/**
 * NETWORK:UGC_GET_CONTENT_NAME
 *
 * 0xB3C23ED232D01319

 * 
 * ------------------------------------------------------------------
 * @param {number} content
 * @returns {string}  
 */
export function ugcGetContentName(content: number): string {
	const ugcGetContentName_result = Citizen.invokeNative<string>('0xB3C23ED232D01319', content);
	return ugcGetContentName_result;
}