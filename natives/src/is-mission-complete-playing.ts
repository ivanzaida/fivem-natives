/**
 * AUDIO:IS_MISSION_COMPLETE_PLAYING
 *
 * 0xB7A02BE66E44058F

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isMissionCompletePlaying(): boolean {
	const isMissionCompletePlaying_result = Citizen.invokeNative<boolean>('0xB7A02BE66E44058F', );
	return isMissionCompletePlaying_result;
}