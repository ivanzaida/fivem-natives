/**
 * AUDIO:RELEASE_MISSION_AUDIO_BANK
 *
 * 0xAF648ACD10AB3A0F

 * 
 * This is a legacy function: please use REQUEST_SCRIPT_AUDIO_BANK instead
 * 
 * 
 * ------------------------------------------------------------------
 */
export function releaseMissionAudioBank(): void {
	const releaseMissionAudioBank_result = Citizen.invokeNative<void>('0xAF648ACD10AB3A0F', );
	return releaseMissionAudioBank_result;
}