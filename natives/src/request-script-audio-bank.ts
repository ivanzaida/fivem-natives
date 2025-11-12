/**
 * AUDIO:REQUEST_SCRIPT_AUDIO_BANK
 *
 * 0xD7E1DF759CD0FFF2

 * 
 * Usually this would be called in a loop which only exits when this returns true.
 * 
 * All occurrences and usages found in b617d, sorted alphabetically and identical lines removed: https://pastebin.com/AkmDAVn6
 * Full list of script audio bank names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/scriptAudioBankNames.json
 * p2 is always -1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} bankName
 * @param {boolean} overNetwork
 * @param {number} playerBits
 * @returns {boolean}  
 */
export function requestScriptAudioBank(bankName: string, overNetwork: boolean = false, playerBits: number = 1): boolean {
	const requestScriptAudioBank_result = Citizen.invokeNative<boolean>('0xD7E1DF759CD0FFF2', bankName, overNetwork, playerBits);
	return requestScriptAudioBank_result;
}