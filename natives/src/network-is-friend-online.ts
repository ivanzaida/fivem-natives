/**
 * NETWORK:NETWORK_IS_FRIEND_ONLINE
 *
 * 0xB8CDCB967533FCB3

 * 
 * ------------------------------------------------------------------
 * @param {string} friendName
 * @returns {boolean}  
 */
export function networkIsFriendOnline(friendName: string): boolean {
	const networkIsFriendOnline_result = Citizen.invokeNative<boolean>('0xB8CDCB967533FCB3', friendName);
	return networkIsFriendOnline_result;
}