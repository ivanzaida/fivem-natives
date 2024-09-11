/**
 * NETWORK:UGC_CLEAR_OFFLINE_QUERY
 *
 * 0x2864B7211C443DA5

 * 
 * ------------------------------------------------------------------
 */
export function ugcClearOfflineQuery(): void {
	const ugcClearOfflineQuery_result = Citizen.invokeNative<void>('0x2864B7211C443DA5', );
	return ugcClearOfflineQuery_result;
}