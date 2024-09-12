/**
 * CFX:MUMBLE_IS_PLAYER_MUTED
 *
 * 0x1D5D50C2

 * Checks if the player is currently muted
 * 
 * ------------------------------------------------------------------
 * @param {number} playerSrc The player to get the mute state for
 * @returns {boolean}  Whether or not the player is muted
 */
export function mumbleIsPlayerMuted(playerSrc: number): boolean {
	const mumbleIsPlayerMuted_result = Citizen.invokeNative<boolean>('0x1D5D50C2', playerSrc);
	return mumbleIsPlayerMuted_result;
}