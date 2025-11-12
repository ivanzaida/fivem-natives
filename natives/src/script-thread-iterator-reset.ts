/**
 * SCRIPT:SCRIPT_THREAD_ITERATOR_RESET
 *
 * 0x29AB4A18A37441C7

 * 
 * Starts a new iteration of the current threads.
 * Call this first, then SCRIPT_THREAD_ITERATOR_GET_NEXT_THREAD_ID (0x30B4FA1C82DD4B9F)
 * 
 * 
 * ------------------------------------------------------------------
 */
export function scriptThreadIteratorReset(): void {
	const scriptThreadIteratorReset_result = Citizen.invokeNative<void>('0x29AB4A18A37441C7', );
	return scriptThreadIteratorReset_result;
}