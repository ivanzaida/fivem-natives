/**
 * CUTSCENE:HAS_CUTSCENE_LOADED
 *
 * 0x0DDDD9D153BCF51F

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function hasCutsceneLoaded(): boolean {
	const hasCutsceneLoaded_result = Citizen.invokeNative<boolean>('0x0DDDD9D153BCF51F', );
	return hasCutsceneLoaded_result;
}