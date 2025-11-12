/**
 * NETWORK:NETWORK_IS_FRIEND_IN_SAME_TITLE
 *
 * 0x68809A66A3FB7B8F

 * 
 * In scripts R calls 'NETWORK_GET_FRIEND_NAME' in this param.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} friendName
 * @returns {boolean}  
 */
export function networkIsFriendInSameTitle(friendName: string): boolean {
	const networkIsFriendInSameTitle_result = Citizen.invokeNative<boolean>('0x68809A66A3FB7B8F', friendName);
	return networkIsFriendInSameTitle_result;
}