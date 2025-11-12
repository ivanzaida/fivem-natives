/**
 * NETWORK:UGC_SET_USING_OFFLINE_CONTENT
 *
 * 0x626E6E90E38C6EF7

 * 
 * Indicates that we're using offline content from script - this will be considered
 * for matchmaking and players with different content
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} usingOffline
 */
export function ugcSetUsingOfflineContent(usingOffline: boolean): void {
	const ugcSetUsingOfflineContent_result = Citizen.invokeNative<void>('0x626E6E90E38C6EF7', usingOffline);
	return ugcSetUsingOfflineContent_result;
}