import { FeWarningFlags, FeWarningFlagsExtended, EWarningMessageFlags } from '@ivanzaida/structures'

/**
 * HUD:SET_WARNING_MESSAGE_WITH_HEADER_AND_SUBSTRING_FLAGS_EXTENDED
 *
 * 0x15803FEC3B9A872B

 * 
 * SubStringFlags allows one or both of the substrings to be literal strings so that the names of UGC missions can be displayed.
 * 
 * labelTitle: Label of the alert's title.
 * labelMsg: Label of the alert's message.
 * p2: This is an enum, check the description for a list.
 * p3: This is an enum, check the description for a list.
 * labelMsg2: Label of another message line
 * p5: usually 0
 * p6: usually -1
 * p7: usually 0
 * p8: unknown label
 * p9: unknown label
 * background: Set to anything other than 0 or false (even any string) and it will draw a background. Setting it to 0 or false will draw no background.
 * errorCode: Error code, shown at the bottom left if set to value other than 0.
 * 
 * instructionalKey enum list:
 * Buttons = {
 *       Empty = 0,
 *       Select = 1, -- (RETURN)
 *       Ok = 2, -- (RETURN)
 *       Yes = 4, -- (RETURN)
 *       Back = 8, -- (ESC)
 *       Cancel = 16, -- (ESC)
 *       No = 32, -- (ESC)
 *       RetrySpace = 64, -- (SPACE)
 *       Restart = 128, -- (SPACE)
 *       Skip = 256, -- (SPACE)
 *       Quit = 512, -- (ESC)
 *       Adjust = 1024, -- (ARROWS)
 *       SpaceKey = 2048, -- (SPACE)
 *       Share = 4096, -- (SPACE)
 *       SignIn = 8192, -- (SPACE)
 *       Continue = 16384, -- (RETURN)
 *       AdjustLeftRight = 32768, -- (SCROLL L/R)
 *       AdjustUpDown = 65536, -- (SCROLL U/D)
 *       Overwrite = 131072, -- (SPACE)
 *       SocialClubSignup = 262144, -- (RETURN)
 *       Confirm = 524288, -- (RETURN)
 *       Queue = 1048576, -- (RETURN)
 *       RetryReturn = 2097152, -- (RETURN)
 *       BackEsc = 4194304, -- (ESC)
 *       SocialClub = 8388608, -- (RETURN)
 *       Spectate = 16777216, -- (SPACE)
 *       OkEsc = 33554432, -- (ESC)
 *       CancelTransfer = 67108864, -- (ESC)
 *       LoadingSpinner = 134217728,
 *       NoReturnToGTA = 268435456, -- (ESC)
 *       CancelEsc = 536870912, -- (ESC)
 * }
 * 
 * Alt = {
 *       Empty = 0,
 *       No = 1, -- (SPACE)
 *       Host = 2, -- (ESC)
 *       SearchForJob = 4, -- (RETURN)
 *       ReturnKey = 8, -- (TURN)
 *       Freemode = 16, -- (ESC)
 * }
 * 
 * Example: https://i.imgur.com/TvmNF4k.png
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} headerTextLabel
 * @param {string} bodyTextLabel
 * @param {FeWarningFlags} buttonFlagBitfieldLower
 * @param {FeWarningFlagsExtended} buttonFlagBitfieldUpper
 * @param {string} bodySubTextLabel
 * @param {boolean} insertNumber
 * @param {number} numberToInsert
 * @param {EWarningMessageFlags} subStringFlags
 * @param {string} firstSubStringTextLabel
 * @param {string} secondSubStringTextLabel
 * @param {boolean} background
 * @param {number} errorNumber
 */
export function setWarningMessageWithHeaderAndSubstringFlagsExtended(headerTextLabel: string, bodyTextLabel: string, buttonFlagBitfieldLower: FeWarningFlags, buttonFlagBitfieldUpper: FeWarningFlagsExtended, bodySubTextLabel: string = null!, insertNumber: boolean = false, numberToInsert: number = 1, subStringFlags: EWarningMessageFlags | number = 0, firstSubStringTextLabel: string = null!, secondSubStringTextLabel: string = null!, background: boolean = true, errorNumber: number = 0): void {
	const setWarningMessageWithHeaderAndSubstringFlagsExtended_result = Citizen.invokeNative<void>('0x15803FEC3B9A872B', headerTextLabel, bodyTextLabel, buttonFlagBitfieldLower, buttonFlagBitfieldUpper, bodySubTextLabel, insertNumber, numberToInsert, subStringFlags, firstSubStringTextLabel, secondSubStringTextLabel, background, errorNumber);
	return setWarningMessageWithHeaderAndSubstringFlagsExtended_result;
}