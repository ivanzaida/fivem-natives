/**
 * AUDIO:RELEASE_AMBIENT_AUDIO_BANK
 *
 * 0x37EFCB45A4F13EB5

 * 
 * This is a legacy function: please use REQUEST_SCRIPT_AUDIO_BANK instead
 * 
 * 
 * ------------------------------------------------------------------
 */
export function releaseAmbientAudioBank(): void {
	const releaseAmbientAudioBank_result = Citizen.invokeNative<void>('0x37EFCB45A4F13EB5', );
	return releaseAmbientAudioBank_result;
}