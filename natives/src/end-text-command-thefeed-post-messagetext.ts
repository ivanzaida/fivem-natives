import { EFeedTextIcon } from '@ivanzaida/structures'

/**
 * HUD:END_TEXT_COMMAND_THEFEED_POST_MESSAGETEXT
 *
 * 0x5C7E2225D7451992

 * 
 * This function can show pictures of every texture that can be requested by REQUEST_STREAMED_TEXTURE_DICT.
 * 
 * List of picNames: https://pastebin.com/XdpJVbHz
 * 
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
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} tXD
 * @param {string} imageName
 * @param {boolean} isImportant
 * @param {EFeedTextIcon} icon
 * @param {string} characterName
 * @param {string} subtitle
 * @returns {number}  
 */
export function endTextCommandThefeedPostMessagetext(tXD: string, imageName: string, isImportant: boolean, icon: EFeedTextIcon | number, characterName: string, subtitle: string = null!): number {
	const endTextCommandThefeedPostMessagetext_result = Citizen.invokeNative<number>('0x5C7E2225D7451992', tXD, imageName, isImportant, icon, characterName, subtitle);
	return endTextCommandThefeedPostMessagetext_result;
}