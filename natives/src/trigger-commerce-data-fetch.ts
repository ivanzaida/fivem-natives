/**
 * NETWORK:TRIGGER_COMMERCE_DATA_FETCH
 *
 * 0xB926A96763FB9843

 * 
 * Does nothing (it's a nullsub).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} forceRefetch
 */
export function triggerCommerceDataFetch(forceRefetch: boolean): void {
	const triggerCommerceDataFetch_result = Citizen.invokeNative<void>('0xB926A96763FB9843', forceRefetch);
	return triggerCommerceDataFetch_result;
}