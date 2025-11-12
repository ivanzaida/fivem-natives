import { EProfileSetting } from '@ivanzaida/structures'

/**
 * STATS:SET_FREEMODE_STRAND_PROGRESSION_STATUS
 *
 * 0x6CDC48346A1C4FCF

 * 
 * Call this command to set the FREEMODE_STRAND_PROGRESSION_STATUS for one of the characters.
 * This command can only be called with the first parameter set to either FREEMODE_STRAND_PROGRESSION_STATUS_CHAR0 or FREEMODE_STRAND_PROGRESSION_STATUS_CHAR1
 * To get the current value, call the command GET_PROFILE_SETTING with FREEMODE_STRAND_PROGRESSION_STATUS_CHAR0 or _CHAR1
 * 
 * Sets profile setting 940 and 941
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EProfileSetting} setting
 * @param {number} newValue
 */
export function setFreemodeStrandProgressionStatus(setting: EProfileSetting | number, newValue: number): void {
	const setFreemodeStrandProgressionStatus_result = Citizen.invokeNative<void>('0x6CDC48346A1C4FCF', setting, newValue);
	return setFreemodeStrandProgressionStatus_result;
}