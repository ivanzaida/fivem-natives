/**
 * NETWORK:NETWORK_GET_FRIEND_COUNT
 *
 * 0xFD8C855412F74D0F

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkGetFriendCount(): number {
	const networkGetFriendCount_result = Citizen.invokeNative<number>('0xFD8C855412F74D0F', );
	return networkGetFriendCount_result;
}