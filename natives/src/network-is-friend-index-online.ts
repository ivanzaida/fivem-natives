/**
 * NETWORK:NETWORK_IS_FRIEND_INDEX_ONLINE
 *
 * 0x5679681143C10F0A

 * 
 * ------------------------------------------------------------------
 * @param {number} friend
 * @returns {boolean}  
 */
export function networkIsFriendIndexOnline(friend: number): boolean {
	const networkIsFriendIndexOnline_result = Citizen.invokeNative<boolean>('0x5679681143C10F0A', friend);
	return networkIsFriendIndexOnline_result;
}