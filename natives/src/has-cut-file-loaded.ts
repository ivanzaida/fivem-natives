/**
 * CUTSCENE:HAS_CUT_FILE_LOADED
 *
 * 0xC0E9475F48788356

 * 
 * Simply checks if the cutscene has loaded and doesn't check via CutSceneManager as opposed to HAS_[THIS]_CUTSCENE_LOADED.
 * Full list of cutscene names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/cutsceneNames.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} cutName
 * @returns {boolean}  
 */
export function hasCutFileLoaded(cutName: string): boolean {
	const hasCutFileLoaded_result = Citizen.invokeNative<boolean>('0xC0E9475F48788356', cutName);
	return hasCutFileLoaded_result;
}