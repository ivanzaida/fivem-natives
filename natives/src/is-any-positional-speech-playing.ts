/**
 * AUDIO:IS_ANY_POSITIONAL_SPEECH_PLAYING
 *
 * 0x101615BBD5E614BD

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isAnyPositionalSpeechPlaying(): boolean {
	const isAnyPositionalSpeechPlaying_result = Citizen.invokeNative<boolean>('0x101615BBD5E614BD', );
	return isAnyPositionalSpeechPlaying_result;
}