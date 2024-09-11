/**
 * AUDIO:AUDIO_IS_MUSIC_PLAYING
 *
 * 0x4FAAAB99FFA2702C

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function audioIsMusicPlaying(): boolean {
	const audioIsMusicPlaying_result = Citizen.invokeNative<boolean>('0x4FAAAB99FFA2702C', );
	return audioIsMusicPlaying_result;
}