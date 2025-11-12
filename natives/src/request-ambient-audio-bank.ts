/**
 * AUDIO:REQUEST_AMBIENT_AUDIO_BANK
 *
 * 0x91476A70AA1CB09A

 * 
 * This is a legacy function: please use REQUEST_SCRIPT_AUDIO_BANK instead
 * 
 * All occurrences and usages found in b617d, sorted alphabetically and identical lines removed: https://pastebin.com/XZ1tmGEz
 * Full list of ambient audio bank names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ambientAudioBankNames.json
 * p2 is always -1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} bankName
 * @param {boolean} overNetwork
 * @param {number} playerBits
 * @returns {boolean}  
 */
export function requestAmbientAudioBank(bankName: string, overNetwork: boolean = false, playerBits: number = 1): boolean {
	const requestAmbientAudioBank_result = Citizen.invokeNative<boolean>('0x91476A70AA1CB09A', bankName, overNetwork, playerBits);
	return requestAmbientAudioBank_result;
}