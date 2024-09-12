import { FeWarningFlags, FeWarningFlagsExtended } from '@ivanzaida/structures'

/**
 * HUD:SET_WARNING_MESSAGE_WITH_HEADER_EXTENDED
 *
 * 0x38B55259C2E078ED

 * 
 * ------------------------------------------------------------------
 * @param {string} headerTextLabel
 * @param {string} bodyTextLabel
 * @param {FeWarningFlags} buttonFlagBitfieldLower
 * @param {FeWarningFlagsExtended} buttonFlagBitfieldUpper
 * @param {string} bodySubTextLabel
 * @param {boolean} insertNumber
 * @param {number} numberToInsert
 * @param {string} firstSubStringTextLabel
 * @param {string} secondSubStringTextLabel
 * @param {boolean} background
 * @param {number} errorNumber
 */
export function setWarningMessageWithHeaderExtended(headerTextLabel: string, bodyTextLabel: string, buttonFlagBitfieldLower: FeWarningFlags, buttonFlagBitfieldUpper: FeWarningFlagsExtended, bodySubTextLabel: string = null!, insertNumber: boolean = false, numberToInsert: number = 1, firstSubStringTextLabel: string = null!, secondSubStringTextLabel: string = null!, background: boolean = true, errorNumber: number = 0): void {
	const setWarningMessageWithHeaderExtended_result = Citizen.invokeNative<void>('0x38B55259C2E078ED', headerTextLabel, bodyTextLabel, buttonFlagBitfieldLower, buttonFlagBitfieldUpper, bodySubTextLabel, insertNumber, numberToInsert, firstSubStringTextLabel, secondSubStringTextLabel, background, errorNumber);
	return setWarningMessageWithHeaderExtended_result;
}