/**
 * STATS:PLAYSTATS_AWARD_BAD_SPORT
 *
 * 0xF03BD9D28197A400

 * 
 * ------------------------------------------------------------------
 * @param {number} evenID
 */
export function playstatsAwardBadSport(evenID: number): void {
	const playstatsAwardBadSport_result = Citizen.invokeNative<void>('0xF03BD9D28197A400', evenID);
	return playstatsAwardBadSport_result;
}