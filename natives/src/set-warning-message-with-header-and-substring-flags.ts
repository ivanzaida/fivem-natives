import { FeWarningFlags, EWarningMessageFlags } from '@ivanzaida/structures'

/**
 * HUD:SET_WARNING_MESSAGE_WITH_HEADER_AND_SUBSTRING_FLAGS
 *
 * 0x701919482C74B5AB

 * 
 * SubStringFlags allows one or both of the substrings to be literal strings so that the names of UGC missions can be displayed.
 * 
 * You can use this native for custom input, without having to use any scaleform-related natives.
 * The native must be called on tick.
 * The entryHeader must be a valid label.
 * For Single lines use JL_INVITE_N as entryLine1, JL_INVITE_ND for multiple.
 * Notes:
 * - additionalIntInfo: replaces first occurrence of ~1~ in provided label with an integer
 * - additionalTextInfoLine1: replaces first occurrence of ~a~ in provided label, with your custom text
 * - additionalTextInfoLine2: replaces second occurrence of ~a~ in provided label, with your custom text
 * - showBackground: shows black background of the warning screen
 * - errorCode: shows an error code at the bottom left if nonzero
 * Example of usage:
 * SET_WARNING_MESSAGE_WITH_HEADER_AND_SUBSTRING_FLAGS("ALERT", "JL_INVITE_ND", 66, "", true, -1, -1, "Testing line 1", "Testing line 2", true, 0);
 * Screenshot:
 * https://imgur.com/a/IYA7vJ8
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} headerTextLabel
 * @param {string} bodyTextLabel
 * @param {FeWarningFlags} buttonFlagBitfield
 * @param {string} bodySubTextLabel
 * @param {boolean} insertNumber
 * @param {number} numberToInsert
 * @param {EWarningMessageFlags} subStringFlags
 * @param {string} firstSubStringTextLabel
 * @param {string} secondSubStringTextLabel
 * @param {boolean} background
 * @param {number} errorNumber
 */
export function setWarningMessageWithHeaderAndSubstringFlags(headerTextLabel: string, bodyTextLabel: string, buttonFlagBitfield: FeWarningFlags, bodySubTextLabel: string = null!, insertNumber: boolean = false, numberToInsert: number = 1, subStringFlags: EWarningMessageFlags | number = 0, firstSubStringTextLabel: string = null!, secondSubStringTextLabel: string = null!, background: boolean = true, errorNumber: number = 0): void {
	const setWarningMessageWithHeaderAndSubstringFlags_result = Citizen.invokeNative<void>('0x701919482C74B5AB', headerTextLabel, bodyTextLabel, buttonFlagBitfield, bodySubTextLabel, insertNumber, numberToInsert, subStringFlags, firstSubStringTextLabel, secondSubStringTextLabel, background, errorNumber);
	return setWarningMessageWithHeaderAndSubstringFlags_result;
}