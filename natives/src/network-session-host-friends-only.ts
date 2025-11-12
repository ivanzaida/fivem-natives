/**
 * NETWORK:NETWORK_SESSION_HOST_FRIENDS_ONLY
 *
 * 0x4F279069441DF335

 * 
 * Does nothing in online but in offline it will cause the screen to fade to black. Nothing happens past then, the screen will sit at black until you restart GTA. Other stuff must be needed to actually host a session.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} gameMode
 * @param {number} maxPlayers
 * @returns {boolean}  
 */
export function networkSessionHostFriendsOnly(gameMode: number, maxPlayers: number): boolean {
	const networkSessionHostFriendsOnly_result = Citizen.invokeNative<boolean>('0x4F279069441DF335', gameMode, maxPlayers);
	return networkSessionHostFriendsOnly_result;
}