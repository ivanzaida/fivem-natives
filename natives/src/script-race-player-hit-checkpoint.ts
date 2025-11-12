/**
 * MISC:SCRIPT_RACE_PLAYER_HIT_CHECKPOINT
 *
 * 0x52E29231F896396E

 * 
 * Registers a player having passed a checkpoint in a script race in mp. SCRIPT_RACE_INIT needs to have been called first.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} ped
 * @param {number} checkpoint
 * @param {number} lap
 * @param {number} time
 */
export function scriptRacePlayerHitCheckpoint(ped: number, checkpoint: number, lap: number, time: number): void {
	const scriptRacePlayerHitCheckpoint_result = Citizen.invokeNative<void>('0x52E29231F896396E', ped, checkpoint, lap, time);
	return scriptRacePlayerHitCheckpoint_result;
}