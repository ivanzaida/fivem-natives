/**
 * HUD:FLAG_PLAYER_CONTEXT_IN_TOURNAMENT
 *
 * 0x622323CECEB8593D

 * 
 * ------------------------------------------------------------------
 * @param {boolean} inTournament
 */
export function flagPlayerContextInTournament(inTournament: boolean): void {
	const flagPlayerContextInTournament_result = Citizen.invokeNative<void>('0x622323CECEB8593D', inTournament);
	return flagPlayerContextInTournament_result;
}