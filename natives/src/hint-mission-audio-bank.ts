/**
 * AUDIO:HINT_MISSION_AUDIO_BANK
 *
 * 0x329F5E069BAF8209

 * 
 * Hints that this bank would be good to load if there are free slots.
 * Does not guarentee loading of the bank - REQUEST_SCRIPT_AUDIO_BANK MUST be used as normal before triggering sounds"
 * This is a legacy function: please use HINT_SCRIPT_AUDIO_BANK instead
 * 
 * p2 is always -1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} bankName
 * @param {boolean} overNetwork
 * @param {number} playerBits
 * @returns {boolean}  
 */
export function hintMissionAudioBank(bankName: string, overNetwork: boolean = false, playerBits: number = 1): boolean {
	const hintMissionAudioBank_result = Citizen.invokeNative<boolean>('0x329F5E069BAF8209', bankName, overNetwork, playerBits);
	return hintMissionAudioBank_result;
}