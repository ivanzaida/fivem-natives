/**
 * CFX:MUMBLE_SET_PLAYER_MUTED
 *
 * 0XCC6C2EB1

 * Mutes or unmutes the specified player
 * 
 * ------------------------------------------------------------------
 * @param {number} playerSrc The player to set the mute state of
 * @param {boolean} toggle Whether to mute or unmute the player
 */
export function mumbleSetPlayerMuted(playerSrc: number, toggle: boolean): void {
	const mumbleSetPlayerMuted_result = Citizen.invokeNative<void>('0XCC6C2EB1', playerSrc, toggle);
	return mumbleSetPlayerMuted_result;
}