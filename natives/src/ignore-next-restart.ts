/**
 * MISC:IGNORE_NEXT_RESTART
 *
 * 0x72B1E2693AC30407

 * 
 * Use in conjunction with PAUSE_DEATH_ARREST_RESTART. If the player is killed or arrested and chooses to replay the mission then call
 * IGNORE_NEXT_RESTART(TRUE) so that he isn't respawned at a hospital or police station.
 * IGNORE_NEXT_RESTART(TRUE) should only ever be called if you know that the player has been killed or arrested. Checking
 * IF NOT IS_PLAYER_PLAYING should be enough for this.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} ignore
 */
export function ignoreNextRestart(ignore: boolean): void {
	const ignoreNextRestart_result = Citizen.invokeNative<void>('0x72B1E2693AC30407', ignore);
	return ignoreNextRestart_result;
}