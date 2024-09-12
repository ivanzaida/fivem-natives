/**
 * NETWORK:NETWORK_SESSION_HOST_CLOSED
 *
 * 0xE2C5447EB91CC682

 * 
 * ------------------------------------------------------------------
 * @param {number} gameMode
 * @param {number} maxPlayers
 * @returns {boolean}  
 */
export function networkSessionHostClosed(gameMode: number, maxPlayers: number): boolean {
	const networkSessionHostClosed_result = Citizen.invokeNative<boolean>('0xE2C5447EB91CC682', gameMode, maxPlayers);
	return networkSessionHostClosed_result;
}