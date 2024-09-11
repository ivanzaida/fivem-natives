/**
 * STATS:PLAYSTATS_ARCADE_GAME
 *
 * 0x7F9682CABF083921

 * 
 * ------------------------------------------------------------------
 * @param {number} gameType
 * @param {number} numPlayers
 * @param {number} powerUps
 * @param {number} kills
 * @param {number} timePlayed
 * @param {number} score
 * @param {number} location
 */
export function playstatsArcadeGame(gameType: number, numPlayers: number, powerUps: number, kills: number, timePlayed: number, score: number, location: number): void {
	const playstatsArcadeGame_result = Citizen.invokeNative<void>('0x7F9682CABF083921', gameType, numPlayers, powerUps, kills, timePlayed, score, location);
	return playstatsArcadeGame_result;
}