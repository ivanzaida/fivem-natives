/**
 * HUD:CREATE_MP_GAMER_TAG_WITH_CREW_COLOR
 *
 * 0xBC529C919C370B10

 * 
 * clanFlag: takes a number 0-5
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} playerNum
 * @param {string} playerName
 * @param {boolean} crewTypeIsPrivate
 * @param {boolean} crewTagContainsRockstar
 * @param {string} crewTag
 * @param {number} crewRank
 * @param {number} crewR
 * @param {number} crewG
 * @param {number} crewB
 */
export function createMpGamerTagWithCrewColor(playerNum: number, playerName: string, crewTypeIsPrivate: boolean, crewTagContainsRockstar: boolean, crewTag: string, crewRank: number, crewR: number, crewG: number, crewB: number): void {
	const createMpGamerTagWithCrewColor_result = Citizen.invokeNative<void>('0xBC529C919C370B10', playerNum, playerName, crewTypeIsPrivate, crewTagContainsRockstar, crewTag, crewRank, crewR, crewG, crewB);
	return createMpGamerTagWithCrewColor_result;
}