/**
 * CUTSCENE:HAS_THIS_CUTSCENE_LOADED
 *
 * 0xC4ADACBD3FE3F266

 * 
 * Full list of cutscene names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/cutsceneNames.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} sceneName
 * @returns {boolean}  
 */
export function hasThisCutsceneLoaded(sceneName: string): boolean {
	const hasThisCutsceneLoaded_result = Citizen.invokeNative<boolean>('0xC4ADACBD3FE3F266', sceneName);
	return hasThisCutsceneLoaded_result;
}