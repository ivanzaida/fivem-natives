import { FeWarningFlags } from '@ivanzaida/structures'

/**
 * HUD:SET_WARNING_MESSAGE
 *
 * 0x7B1776B3B53F8D74

 * 
 * You can only use text entries. No custom text.
 * 
 * Example: SET_WARNING_MESSAGE("t20", 3, "adder", false, -1, 0, 0, true);
 * errorCode: shows an error code at the bottom left if nonzero
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} textLabel
 * @param {FeWarningFlags} buttonFlagBitfield
 * @param {string} bodySubTextLabel
 * @param {boolean} insertNumber
 * @param {number} numberToInsert
 * @param {string} firstSubStringTextLabel
 * @param {string} secondSubStringTextLabel
 * @param {boolean} background
 * @param {number} errorNumber
 */
export function setWarningMessage(textLabel: string, buttonFlagBitfield: FeWarningFlags, bodySubTextLabel: string = null!, insertNumber: boolean = false, numberToInsert: number = 1, firstSubStringTextLabel: string = null!, secondSubStringTextLabel: string = null!, background: boolean = true, errorNumber: number = 0): void {
	const setWarningMessage_result = Citizen.invokeNative<void>('0x7B1776B3B53F8D74', textLabel, buttonFlagBitfield, bodySubTextLabel, insertNumber, numberToInsert, firstSubStringTextLabel, secondSubStringTextLabel, background, errorNumber);
	return setWarningMessage_result;
}