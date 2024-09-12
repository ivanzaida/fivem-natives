/**
 * HUD:END_TEXT_COMMAND_THEFEED_POST_CREWTAG
 *
 * 0xB262204BCFF28FCC

 * 
 * ------------------------------------------------------------------
 * @param {boolean} isPrivate
 * @param {boolean} showLogoFlag
 * @param {string} crewString
 * @param {number} crewRank
 * @param {boolean} founderStatus
 * @param {boolean} isImportant
 * @param {number} crewId
 * @param {number} crewColourR
 * @param {number} crewColourG
 * @param {number} crewColourB
 * @returns {number}  
 */
export function endTextCommandThefeedPostCrewtag(isPrivate: boolean, showLogoFlag: boolean, crewString: string, crewRank: number, founderStatus: boolean, isImportant: boolean, crewId: number, crewColourR: number = 0, crewColourG: number = 0, crewColourB: number = 0): number {
	const endTextCommandThefeedPostCrewtag_result = Citizen.invokeNative<number>('0xB262204BCFF28FCC', isPrivate, showLogoFlag, crewString, crewRank, founderStatus, isImportant, crewId, crewColourR, crewColourG, crewColourB);
	return endTextCommandThefeedPostCrewtag_result;
}