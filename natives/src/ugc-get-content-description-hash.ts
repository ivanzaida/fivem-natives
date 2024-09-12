/**
 * NETWORK:UGC_GET_CONTENT_DESCRIPTION_HASH
 *
 * 0x8715A76F8294FEE0

 * 
 * ------------------------------------------------------------------
 * @param {number} content
 * @returns {number}  
 */
export function ugcGetContentDescriptionHash(content: number): number {
	const ugcGetContentDescriptionHash_result = Citizen.invokeNative<number>('0x8715A76F8294FEE0', content);
	return ugcGetContentDescriptionHash_result;
}