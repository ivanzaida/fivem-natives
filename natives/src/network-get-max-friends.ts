/**
 * NETWORK:NETWORK_GET_MAX_FRIENDS
 *
 * 0x93352D3163414D4A

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkGetMaxFriends(): number {
	const networkGetMaxFriends_result = Citizen.invokeNative<number>('0x93352D3163414D4A', );
	return networkGetMaxFriends_result;
}