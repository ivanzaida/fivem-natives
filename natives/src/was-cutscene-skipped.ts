/**
 * CUTSCENE:WAS_CUTSCENE_SKIPPED
 *
 * 0xD9E3F021F9D8CEF9

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function wasCutsceneSkipped(): boolean {
	const wasCutsceneSkipped_result = Citizen.invokeNative<boolean>('0xD9E3F021F9D8CEF9', );
	return wasCutsceneSkipped_result;
}