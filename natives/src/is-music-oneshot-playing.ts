/**
 * AUDIO:IS_MUSIC_ONESHOT_PLAYING
 *
 * 0xFB9CF6B99A98306F

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isMusicOneshotPlaying(): boolean {
	const isMusicOneshotPlaying_result = Citizen.invokeNative<boolean>('0xFB9CF6B99A98306F', );
	return isMusicOneshotPlaying_result;
}