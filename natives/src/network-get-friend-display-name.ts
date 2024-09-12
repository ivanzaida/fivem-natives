/**
 * NETWORK:NETWORK_GET_FRIEND_DISPLAY_NAME
 *
 * 0x6FB5D26E5812C023

 * 
 * ------------------------------------------------------------------
 * @param {number} friend
 * @returns {string}  
 */
export function networkGetFriendDisplayName(friend: number): string {
	const networkGetFriendDisplayName_result = Citizen.invokeNative<string>('0x6FB5D26E5812C023', friend);
	return networkGetFriendDisplayName_result;
}