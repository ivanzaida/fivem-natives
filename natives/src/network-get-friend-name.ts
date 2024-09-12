/**
 * NETWORK:NETWORK_GET_FRIEND_NAME
 *
 * 0x5FDC59F83F2D1C9F

 * 
 * ------------------------------------------------------------------
 * @param {number} friend
 * @returns {string}  
 */
export function networkGetFriendName(friend: number): string {
	const networkGetFriendName_result = Citizen.invokeNative<string>('0x5FDC59F83F2D1C9F', friend);
	return networkGetFriendName_result;
}