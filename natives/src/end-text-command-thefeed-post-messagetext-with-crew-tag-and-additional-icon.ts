import { EFeedTextIcon } from '@ivanzaida/structures'

/**
 * HUD:END_TEXT_COMMAND_THEFEED_POST_MESSAGETEXT_WITH_CREW_TAG_AND_ADDITIONAL_ICON
 *
 * 0x0D54BCD3F7048BFA

 * 
 * This function can show pictures of every texture that can be requested by REQUEST_STREAMED_TEXTURE_DICT.
 * 
 * List of picNames:  https://pastebin.com/XdpJVbHz
 * 
 * flash is a bool for fading in.
 * iconTypes:
 * 1 : Chat Box
 * 2 : Email
 * 3 : Add Friend Request
 * 4 : Nothing
 * 5 : Nothing
 * 6 : Nothing
 * 7 : Right Jumping Arrow
 * 8 : RP Icon
 * 9 : $ Icon
 * 
 * "sender" is the very top header. This can be any old string.
 * "subject" is the header under the sender.
 * "duration" is a multiplier, so 1.0 is normal, 2.0 is twice as long (very slow), and 0.5 is half as long.
 * "clanTag" shows a crew tag in the "sender" header, after the text. You need to use 3 underscores as padding. Maximum length of this field seems to be 7. (e.g. "MK" becomes "___MK", "ACE" becomes "___ACE", etc.)
 * iconType2 is a mirror of iconType. It shows in the "subject" line, right under the original iconType.
 * 
 * 
 * int IconNotification(char text, char text2, char Subject)
 * {
 *     BEGIN_TEXT_COMMAND_THEFEED_POST("STRING");
 *  ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 *    _SET_NOTIFICATION_MESSAGE_CLAN_TAG_2("CHAR_SOCIAL_CLUB", "CHAR_SOCIAL_CLUB", 1, 7, text2, Subject, 1.0f, "__EXAMPLE", 7);
 *    return END_TEXT_COMMAND_THEFEED_POST_TICKER(1, 1);
 * }
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} tXD
 * @param {string} imageName
 * @param {boolean} isImportant
 * @param {EFeedTextIcon} icon
 * @param {string} characterName
 * @param {string} subtitle
 * @param {number} timeMultiplier
 * @param {string} crewTagPacked
 * @param {EFeedTextIcon} icon2
 * @param {number} hudColor
 * @returns {number}  
 */
export function endTextCommandThefeedPostMessagetextWithCrewTagAndAdditionalIcon(tXD: string, imageName: string, isImportant: boolean, icon: EFeedTextIcon | number, characterName: string, subtitle: string = null!, timeMultiplier: number = 1, crewTagPacked: string = null!, icon2: EFeedTextIcon | number = 0, hudColor: number = 1): number {
	const endTextCommandThefeedPostMessagetextWithCrewTagAndAdditionalIcon_result = Citizen.invokeNative<number>('0x0D54BCD3F7048BFA', tXD, imageName, isImportant, icon, characterName, subtitle, timeMultiplier, crewTagPacked, icon2, hudColor);
	return endTextCommandThefeedPostMessagetextWithCrewTagAndAdditionalIcon_result;
}