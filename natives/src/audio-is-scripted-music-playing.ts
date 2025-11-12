/**
 * AUDIO:AUDIO_IS_SCRIPTED_MUSIC_PLAYING
 *
 * 0x7507A74A3D963966

 * 
 * This is an alias of AUDIO_IS_MUSIC_PLAYING.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function audioIsScriptedMusicPlaying(): boolean {
	const audioIsScriptedMusicPlaying_result = Citizen.invokeNative<boolean>('0x7507A74A3D963966', );
	return audioIsScriptedMusicPlaying_result;
}