import { FeWarningFlags } from '@ivanzaida/structures'

/**
 * HUD:SET_WARNING_MESSAGE_WITH_HEADER
 *
 * 0xDC38CC1E35B6A5D7

 * 
 * Shows a warning message on screen with a header.
 * Note: You can only use text entries. No custom text. You can recreate this easily with scaleforms.
 * Example: https://i.imgur.com/ITJt8bJ.png
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} headerTextLabel
 * @param {string} bodyTextLabel
 * @param {FeWarningFlags} buttonFlagBitfield
 * @param {string} bodySubTextLabel
 * @param {boolean} insertNumber
 * @param {number} numberToInsert
 * @param {string} firstSubStringTextLabel
 * @param {string} secondSubStringTextLabel
 * @param {boolean} background
 * @param {number} errorNumber
 */
export function setWarningMessageWithHeader(headerTextLabel: string, bodyTextLabel: string, buttonFlagBitfield: FeWarningFlags, bodySubTextLabel: string = null!, insertNumber: boolean = false, numberToInsert: number = 1, firstSubStringTextLabel: string = null!, secondSubStringTextLabel: string = null!, background: boolean = true, errorNumber: number = 0): void {
	const setWarningMessageWithHeader_result = Citizen.invokeNative<void>('0xDC38CC1E35B6A5D7', headerTextLabel, bodyTextLabel, buttonFlagBitfield, bodySubTextLabel, insertNumber, numberToInsert, firstSubStringTextLabel, secondSubStringTextLabel, background, errorNumber);
	return setWarningMessageWithHeader_result;
}