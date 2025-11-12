/**
 * SCRIPT:BG_END_CONTEXT
 *
 * 0x3611A662967FC11C

 * 
 * Deletes the given context from the background scripts context map.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} context
 */
export function bgEndContext(context: string): void {
	const bgEndContext_result = Citizen.invokeNative<void>('0x3611A662967FC11C', context);
	return bgEndContext_result;
}