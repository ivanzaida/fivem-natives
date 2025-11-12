/**
 * SCRIPT:BG_END_CONTEXT_HASH
 *
 * 0xA4991DF2B554184E

 * 
 * Hashed version of BG_END_CONTEXT.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} context
 */
export function bgEndContextHash(context: number): void {
	const bgEndContextHash_result = Citizen.invokeNative<void>('0xA4991DF2B554184E', context);
	return bgEndContextHash_result;
}