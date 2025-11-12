/**
 * CFX:GET_PLAYER_PING
 *
 * 0xFF1290D4

 * See [GET_PLAYER_PEER_STATISTICS](#_0x9A928294) if you want more detailed information, like packet loss, and packet/rtt variance
 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc
 * @returns {number}  Returns the mean amount of time a packet takes to get to the client
 */
export function getPlayerPing(playerSrc: string): number {
	const getPlayerPing_result = Citizen.invokeNative<number>('0xFF1290D4', playerSrc);
	return getPlayerPing_result;
}