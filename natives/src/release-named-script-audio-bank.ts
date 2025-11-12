/**
 * AUDIO:RELEASE_NAMED_SCRIPT_AUDIO_BANK
 *
 * 0x48FA483FE4F18CFE

 * 
 * Full list of script audio bank names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/scriptAudioBankNames.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} bankName
 */
export function releaseNamedScriptAudioBank(bankName: string): void {
	const releaseNamedScriptAudioBank_result = Citizen.invokeNative<void>('0x48FA483FE4F18CFE', bankName);
	return releaseNamedScriptAudioBank_result;
}