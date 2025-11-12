import { EHudColours } from '@ivanzaida/structures'

/**
 * HUD:END_TEXT_COMMAND_THEFEED_POST_AWARD
 *
 * 0xD52B1CDE8B03CE86

 * 
 * Shows an "award" notification above the minimap, example: https://i.imgur.com/e2DNaKX.png
 * Example:
 * 
 * HUD::BEGIN_TEXT_COMMAND_THEFEED_POST("HUNT");
 * HUD::END_TEXT_COMMAND_THEFEED_POST_AWARD("Hunting", "Hunting_Gold_128", 0, 109, "HUD_MED_UNLKED");
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} tXD
 * @param {string} tXN
 * @param {number} xP
 * @param {EHudColours} awardColour
 * @param {string} title
 * @returns {number}  
 */
export function endTextCommandThefeedPostAward(tXD: string, tXN: string, xP: number, awardColour: EHudColours | number, title: string = null!): number {
	const endTextCommandThefeedPostAward_result = Citizen.invokeNative<number>('0xD52B1CDE8B03CE86', tXD, tXN, xP, awardColour, title);
	return endTextCommandThefeedPostAward_result;
}