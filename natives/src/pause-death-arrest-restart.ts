/**
 * MISC:PAUSE_DEATH_ARREST_RESTART
 *
 * 0xD43B9D1692F5C06E

 * When the player is killed or arrested, he will be respawned at the closest hospital or police station.
 * If you want to give the player the option to replay a mission then call PAUSE_DEATH_ARREST_RESTART(TRUE) to prevent the respawn taking
 * place immediately. If the player chooses to replay the mission then call IGNORE_NEXT_RESTART(TRUE) and
 * call PAUSE_DEATH_ARREST_RESTART(FALSE). If the player chooses not to replay then just call PAUSE_DEATH_ARREST_RESTART(FALSE).
 * PAUSE_DEATH_ARREST_RESTART(TRUE) should only ever be called if you know that the player has been killed or arrested. Checking
 * IF NOT IS_PLAYER_PLAYING should be enough for this.
 * 
 * ------------------------------------------------------------------
 * @param {boolean} paused
 */
export function pauseDeathArrestRestart(paused: boolean): void {
	const pauseDeathArrestRestart_result = Citizen.invokeNative<void>('0xD43B9D1692F5C06E', paused);
	return pauseDeathArrestRestart_result;
}