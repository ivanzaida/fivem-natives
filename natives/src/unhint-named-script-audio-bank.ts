/**
 * AUDIO:UNHINT_NAMED_SCRIPT_AUDIO_BANK
 *
 * 0x9F7EBAD31811A31E

 * 
 * ------------------------------------------------------------------
 * @param {string} bankName
 */
export function unhintNamedScriptAudioBank(bankName: string): void {
	const unhintNamedScriptAudioBank_result = Citizen.invokeNative<void>('0x9F7EBAD31811A31E', bankName);
	return unhintNamedScriptAudioBank_result;
}