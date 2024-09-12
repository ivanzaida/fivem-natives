/**
 * NETWORK:UGC_GET_CONTENT_LANGUAGE
 *
 * 0xA2CE098EA47DF97D

 * 
 * ------------------------------------------------------------------
 * @param {number} content
 * @returns {number}  
 */
export function ugcGetContentLanguage(content: number): number {
	const ugcGetContentLanguage_result = Citizen.invokeNative<number>('0xA2CE098EA47DF97D', content);
	return ugcGetContentLanguage_result;
}