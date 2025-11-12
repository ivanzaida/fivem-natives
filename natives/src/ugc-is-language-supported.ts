/**
 * NETWORK:UGC_IS_LANGUAGE_SUPPORTED
 *
 * 0xFD898AF12570EEB6

 * 
 * Returns TRUE if a language is supported on the local console.
 * Use UGC_GET_CONTENT_LANGUAGE to get the language of a content item.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} language
 * @returns {boolean}  
 */
export function ugcIsLanguageSupported(language: number): boolean {
	const ugcIsLanguageSupported_result = Citizen.invokeNative<boolean>('0xFD898AF12570EEB6', language);
	return ugcIsLanguageSupported_result;
}