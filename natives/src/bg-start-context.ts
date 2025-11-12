/**
 * SCRIPT:BG_START_CONTEXT
 *
 * 0x34D5EB1E6F706A50

 * 
 * Inserts the given context into the background scripts context map.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} context
 */
export function bgStartContext(context: string): void {
	const bgStartContext_result = Citizen.invokeNative<void>('0x34D5EB1E6F706A50', context);
	return bgStartContext_result;
}