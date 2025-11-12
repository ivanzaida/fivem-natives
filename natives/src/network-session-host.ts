/**
 * NETWORK:NETWORK_SESSION_HOST
 *
 * 0x255FDE258192D9FE

 * 
 * Does nothing in online but in offline it will cause the screen to fade to black. Nothing happens past then, the screen will sit at black until you restart GTA. Other stuff must be needed to actually host a session.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} gameMode
 * @param {number} maxPlayers
 * @param {boolean} isPrivate
 * @returns {boolean}  
 */
export function networkSessionHost(gameMode: number, maxPlayers: number, isPrivate: boolean): boolean {
	const networkSessionHost_result = Citizen.invokeNative<boolean>('0x255FDE258192D9FE', gameMode, maxPlayers, isPrivate);
	return networkSessionHost_result;
}