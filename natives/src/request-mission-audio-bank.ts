/**
 * AUDIO:REQUEST_MISSION_AUDIO_BANK
 *
 * 0xE60D329593E7759D

 * 
 * This is a legacy function: please use REQUEST_SCRIPT_AUDIO_BANK instead
 * 
 * All occurrences and usages found in b617d: https://pastebin.com/NzZZ2Tmm
 * Full list of mission audio bank names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/missionAudioBankNames.json
 * p2 is always -1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} bankName
 * @param {boolean} overNetwork
 * @param {number} playerBits
 * @returns {boolean}  
 */
export function requestMissionAudioBank(bankName: string, overNetwork: boolean = false, playerBits: number = 1): boolean {
	const requestMissionAudioBank_result = Citizen.invokeNative<boolean>('0xE60D329593E7759D', bankName, overNetwork, playerBits);
	return requestMissionAudioBank_result;
}