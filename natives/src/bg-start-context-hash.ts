/**
 * SCRIPT:BG_START_CONTEXT_HASH
 *
 * 0x52DC717C5008D9DA

 * 
 * Hashed version of BG_START_CONTEXT.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} context
 */
export function bgStartContextHash(context: number): void {
	const bgStartContextHash_result = Citizen.invokeNative<void>('0x52DC717C5008D9DA', context);
	return bgStartContextHash_result;
}