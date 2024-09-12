/**
 * CFX:GET_PLAYER_TIME_ONLINE
 *
 * 0x67D2E605

 * Gets the current time online for a specified player.
 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc A player.
 * @returns {number}  The current time online in seconds.
 */
export function getPlayerTimeOnline(playerSrc: string): number {
	const getPlayerTimeOnline_result = Citizen.invokeNative<number>('0x67D2E605', playerSrc);
	return getPlayerTimeOnline_result;
}