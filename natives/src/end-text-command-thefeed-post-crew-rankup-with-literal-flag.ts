/**
 * HUD:END_TEXT_COMMAND_THEFEED_POST_CREW_RANKUP_WITH_LITERAL_FLAG
 *
 * 0xC36615DCBE463B8A

 * 
 * ------------------------------------------------------------------
 * @param {string} subtitle
 * @param {string} tXD
 * @param {string} tXN
 * @param {boolean} isImportant
 * @param {boolean} subtitleIsLiteral
 * @returns {number}  
 */
export function endTextCommandThefeedPostCrewRankupWithLiteralFlag(subtitle: string, tXD: string, tXN: string, isImportant: boolean, subtitleIsLiteral: boolean): number {
	const endTextCommandThefeedPostCrewRankupWithLiteralFlag_result = Citizen.invokeNative<number>('0xC36615DCBE463B8A', subtitle, tXD, tXN, isImportant, subtitleIsLiteral);
	return endTextCommandThefeedPostCrewRankupWithLiteralFlag_result;
}