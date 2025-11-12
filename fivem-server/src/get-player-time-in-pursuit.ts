/**
 * CFX:GET_PLAYER_TIME_IN_PURSUIT
 *
 * 0x7ADE63E1

 * ```Gets the amount of time player has spent evading the cops.Counter starts and increments only when cops are chasing the player.If the player is evading, the timer will pause.```
 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc The target player
 * @param {boolean} lastPursuit False = CurrentPursuit, True = LastPursuit
 * @returns {number}  Returns -1, if the player is not wanted or wasn't in pursuit before, depending on the lastPursuit parameter
Returns 0, if lastPursuit == False and the player has a wanted level, but the pursuit has not started yet
Otherwise, will return the milliseconds of the pursuit.
 */
export function getPlayerTimeInPursuit(playerSrc: string, lastPursuit: boolean): number {
	const getPlayerTimeInPursuit_result = Citizen.invokeNative<number>('0x7ADE63E1', playerSrc, lastPursuit);
	return getPlayerTimeInPursuit_result;
}