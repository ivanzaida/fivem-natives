/**
 * NETWORK:NETWORK_IS_FRIEND_IN_MULTIPLAYER
 *
 * 0x116CDE00FC231A4B

 * 
 * ------------------------------------------------------------------
 * @param {string} friendName
 * @returns {boolean}  
 */
export function networkIsFriendInMultiplayer(friendName: string): boolean {
	const networkIsFriendInMultiplayer_result = Citizen.invokeNative<boolean>('0x116CDE00FC231A4B', friendName);
	return networkIsFriendInMultiplayer_result;
}