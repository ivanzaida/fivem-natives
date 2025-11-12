/**
 * NETWORK:NETWORK_IS_ADDING_FRIEND
 *
 * 0xD731E73BAE356976

 * 
 * Sends an invitation to a player to become your friend.
 * Only available on PS3 - calling on other platforms will ASSERT
 * A return value of false means that we're still processing the last friend request
 * Wait until it returns true (indicating success)
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsAddingFriend(): boolean {
	const networkIsAddingFriend_result = Citizen.invokeNative<boolean>('0xD731E73BAE356976', );
	return networkIsAddingFriend_result;
}