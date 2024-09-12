/**
 * NETWORK:UGC_CLEAR_QUERY_RESULTS
 *
 * 0x7D7DC90EB1D8C8B4

 * 
 * ------------------------------------------------------------------
 */
export function ugcClearQueryResults(): void {
	const ugcClearQueryResults_result = Citizen.invokeNative<void>('0x7D7DC90EB1D8C8B4', );
	return ugcClearQueryResults_result;
}