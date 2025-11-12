/**
 * AUDIO:HINT_AMBIENT_AUDIO_BANK
 *
 * 0x69600B337BEBDC69

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
export function hintAmbientAudioBank(bankName: string, overNetwork: boolean = false, playerBits: number = 1): boolean {
	const hintAmbientAudioBank_result = Citizen.invokeNative<boolean>('0x69600B337BEBDC69', bankName, overNetwork, playerBits);
	return hintAmbientAudioBank_result;
}