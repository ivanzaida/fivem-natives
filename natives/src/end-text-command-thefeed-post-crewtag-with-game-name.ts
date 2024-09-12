/**
 * HUD:END_TEXT_COMMAND_THEFEED_POST_CREWTAG_WITH_GAME_NAME
 *
 * 0x4252EAF1B00ED825

 * 
 * ------------------------------------------------------------------
 * @param {boolean} isPrivate
 * @param {boolean} showLogoFlag
 * @param {string} crewString
 * @param {number} crewRank
 * @param {boolean} founderStatus
 * @param {boolean} isImportant
 * @param {number} crewId
 * @param {string} gameName
 * @param {number} crewColourR
 * @param {number} crewColourG
 * @param {number} crewColourB
 * @returns {number}  
 */
export function endTextCommandThefeedPostCrewtagWithGameName(isPrivate: boolean, showLogoFlag: boolean, crewString: string, crewRank: number, founderStatus: boolean, isImportant: boolean, crewId: number, gameName: string, crewColourR: number = 0, crewColourG: number = 0, crewColourB: number = 0): number {
	const endTextCommandThefeedPostCrewtagWithGameName_result = Citizen.invokeNative<number>('0x4252EAF1B00ED825', isPrivate, showLogoFlag, crewString, crewRank, founderStatus, isImportant, crewId, gameName, crewColourR, crewColourG, crewColourB);
	return endTextCommandThefeedPostCrewtagWithGameName_result;
}