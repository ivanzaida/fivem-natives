import { EFeedTextIcon } from '@ivanzaida/structures'

/**
 * HUD:END_TEXT_COMMAND_THEFEED_POST_MESSAGETEXT_TU
 *
 * 0x6015BF83F19DAE5C

 * 
 * This function can show pictures of every texture that can be requested by REQUEST_STREAMED_TEXTURE_DICT.
 * 
 * NOTE: 'duration' is a multiplier, so 1.0 is normal, 2.0 is twice as long (very slow), and 0.5 is half as long.
 * 
 * Example, only occurrence in the scripts:
 * v_8 = HUD::END_TEXT_COMMAND_THEFEED_POST_MESSAGETEXT_TU("CHAR_SOCIAL_CLUB", "CHAR_SOCIAL_CLUB", 0, 0, &v_9, "", a_5);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} tXD
 * @param {string} imageName
 * @param {boolean} isImportant
 * @param {EFeedTextIcon} icon
 * @param {string} characterName
 * @param {string} subtitle Optional Subtitle to display below title
 * @param {number} timeMultiplier Multiplicative modifier to the standard display time of a feed item (2.0f will double the amount of time this feed item is shown on screen)
 * @returns {number}  
 */
export function endTextCommandThefeedPostMessagetextTu(tXD: string, imageName: string, isImportant: boolean, icon: EFeedTextIcon | number, characterName: string, subtitle: string = null!, timeMultiplier: number = 1): number {
	const endTextCommandThefeedPostMessagetextTu_result = Citizen.invokeNative<number>('0x6015BF83F19DAE5C', tXD, imageName, isImportant, icon, characterName, subtitle, timeMultiplier);
	return endTextCommandThefeedPostMessagetextTu_result;
}