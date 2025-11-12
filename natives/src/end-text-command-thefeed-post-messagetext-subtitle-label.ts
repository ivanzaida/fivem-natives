import { EFeedTextIcon } from '@ivanzaida/structures'

/**
 * HUD:END_TEXT_COMMAND_THEFEED_POST_MESSAGETEXT_SUBTITLE_LABEL
 *
 * 0xB8ACFA63585700CC

 * 
 * This function can show pictures of every texture that can be requested by REQUEST_STREAMED_TEXTURE_DICT.
 * 
 * Needs more research.
 * 
 * Only one type of usage in the scripts:
 * 
 * HUD::END_TEXT_COMMAND_THEFEED_POST_MESSAGETEXT_SUBTITLE_LABEL("CHAR_ACTING_UP", "CHAR_ACTING_UP", 0, 0, "DI_FEED_CHAR", a_0);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} tXD
 * @param {string} imageName
 * @param {boolean} isImportant
 * @param {EFeedTextIcon} icon
 * @param {string} characterName
 * @param {string} subtitle Text label of subtitle
 * @returns {number}  
 */
export function endTextCommandThefeedPostMessagetextSubtitleLabel(tXD: string, imageName: string, isImportant: boolean, icon: EFeedTextIcon | number, characterName: string, subtitle: string = null!): number {
	const endTextCommandThefeedPostMessagetextSubtitleLabel_result = Citizen.invokeNative<number>('0xB8ACFA63585700CC', tXD, imageName, isImportant, icon, characterName, subtitle);
	return endTextCommandThefeedPostMessagetextSubtitleLabel_result;
}