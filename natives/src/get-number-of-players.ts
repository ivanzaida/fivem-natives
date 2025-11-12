/**
 * PLAYER:GET_NUMBER_OF_PLAYERS
 *
 * 0x7D1D107CFA0B3F0F

 * 
 * Gets the number of players in the current session.
 * If not multiplayer, always returns 1.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getNumberOfPlayers(): number {
	const getNumberOfPlayers_result = Citizen.invokeNative<number>('0x7D1D107CFA0B3F0F', );
	return getNumberOfPlayers_result;
}