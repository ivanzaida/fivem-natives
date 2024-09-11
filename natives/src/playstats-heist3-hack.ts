/**
 * STATS:PLAYSTATS_HEIST3_HACK
 *
 * 0x675E746FC2A4FB77

 * 
 * ------------------------------------------------------------------
 * @param {number} type
 * @param {number} playthroughId
 * @param {number} minigame
 * @param {boolean} won
 * @param {number} step
 * @param {number} time
 */
export function playstatsHeist3Hack(type: number, playthroughId: number, minigame: number, won: boolean, step: number, time: number): void {
	const playstatsHeist3Hack_result = Citizen.invokeNative<void>('0x675E746FC2A4FB77', type, playthroughId, minigame, won, step, time);
	return playstatsHeist3Hack_result;
}