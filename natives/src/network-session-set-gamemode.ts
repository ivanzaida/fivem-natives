/**
 * NETWORK:NETWORK_SESSION_SET_GAMEMODE
 *
 * 0xD51099E517218F8C

 * 
 * ------------------------------------------------------------------
 * @param {number} gameMode
 */
export function networkSessionSetGamemode(gameMode: number): void {
	const networkSessionSetGamemode_result = Citizen.invokeNative<void>('0xD51099E517218F8C', gameMode);
	return networkSessionSetGamemode_result;
}