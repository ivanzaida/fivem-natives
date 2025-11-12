/**
 * AUDIO:UNHINT_AMBIENT_AUDIO_BANK
 *
 * 0x3A2C09DEA2F7A5FB

 * 
 * This is a legacy function: please use UNHINT_SCRIPT_AUDIO_BANK instead
 * 
 * 
 * ------------------------------------------------------------------
 */
export function unhintAmbientAudioBank(): void {
	const unhintAmbientAudioBank_result = Citizen.invokeNative<void>('0x3A2C09DEA2F7A5FB', );
	return unhintAmbientAudioBank_result;
}