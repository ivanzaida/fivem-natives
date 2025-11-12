import { EFeedTextIcon } from '@ivanzaida/structures'

/**
 * HUD:END_TEXT_COMMAND_THEFEED_POST_MESSAGETEXT_WITH_CREW_TAG
 *
 * 0xE4DA8A1904D03AB9

 * 
 * This function can show pictures of every texture that can be requested by REQUEST_STREAMED_TEXTURE_DICT.
 * 
 * List of picNames https://pastebin.com/XdpJVbHz
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
 * @param {string} crewTagPacked Packed crew tag string to show for game invites from crew members
 * @returns {number}  
 */
export function endTextCommandThefeedPostMessagetextWithCrewTag(tXD: string, imageName: string, isImportant: boolean, icon: EFeedTextIcon | number, characterName: string, subtitle: string = null!, timeMultiplier: number = 1, crewTagPacked: string = null!): number {
	const endTextCommandThefeedPostMessagetextWithCrewTag_result = Citizen.invokeNative<number>('0xE4DA8A1904D03AB9', tXD, imageName, isImportant, icon, characterName, subtitle, timeMultiplier, crewTagPacked);
	return endTextCommandThefeedPostMessagetextWithCrewTag_result;
}