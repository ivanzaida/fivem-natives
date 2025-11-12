/**
 * AUDIO:HINT_SCRIPT_AUDIO_BANK
 *
 * 0x533FC7490FC4937D

 * 
 * Hints that this bank would be good to load if there are free slots.
 * Does not guarentee loading of the bank - REQUEST_SCRIPT_AUDIO_BANK MUST be used as normal before triggering sounds"
 * Just need to be called once!
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
export function hintScriptAudioBank(bankName: string, overNetwork: boolean = false, playerBits: number = 1): boolean {
	const hintScriptAudioBank_result = Citizen.invokeNative<boolean>('0x533FC7490FC4937D', bankName, overNetwork, playerBits);
	return hintScriptAudioBank_result;
}