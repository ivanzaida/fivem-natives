/**
 * CUTSCENE:IS_CUTSCENE_PLAYING
 *
 * 0xFD216000DC314A92

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isCutscenePlaying(): boolean {
	const isCutscenePlaying_result = Citizen.invokeNative<boolean>('0xFD216000DC314A92', );
	return isCutscenePlaying_result;
}