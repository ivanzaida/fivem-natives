/**
 * AUDIO:IS_GAME_IN_CONTROL_OF_MUSIC
 *
 * 0x7104198E063B41C7

 * 
 * Hardcoded to return 1
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isGameInControlOfMusic(): boolean {
	const isGameInControlOfMusic_result = Citizen.invokeNative<boolean>('0x7104198E063B41C7', );
	return isGameInControlOfMusic_result;
}