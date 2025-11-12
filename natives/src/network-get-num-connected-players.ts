/**
 * NETWORK:NETWORK_GET_NUM_CONNECTED_PLAYERS
 *
 * 0x6AC5EDDD33D79407

 * 
 * Returns the amount of players connected in the current session. Only works when connected to a session/server.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkGetNumConnectedPlayers(): number {
	const networkGetNumConnectedPlayers_result = Citizen.invokeNative<number>('0x6AC5EDDD33D79407', );
	return networkGetNumConnectedPlayers_result;
}