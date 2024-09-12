/**
 * STATS:PLAYSTATS_HEIST4_HACK
 *
 * 0xCAA6345ABFF6EA75

 * 
 * ------------------------------------------------------------------
 * @param {number} playthroughId
 * @param {number} minigame
 * @param {boolean} won
 * @param {number} istep
 * @param {number} time
 */
export function playstatsHeist4Hack(playthroughId: number, minigame: number, won: boolean, istep: number, time: number): void {
	const playstatsHeist4Hack_result = Citizen.invokeNative<void>('0xCAA6345ABFF6EA75', playthroughId, minigame, won, istep, time);
	return playstatsHeist4Hack_result;
}